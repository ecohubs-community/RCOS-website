import { expect, test } from '@playwright/test';

test('home renders with a single h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveCount(1);
});

test('a standard chapter renders its clauses', async ({ page }) => {
	await page.goto('/standard/core/0.1/layer-0-identity-scope');
	await expect(page.locator('[id="2.1.1"]')).toContainText(
		'A community MUST define exactly one primary purpose.'
	);
});

// On Vercel the redirect is a 308 route (from the prerendered redirects);
// `vite preview` serves the same redirect as a page that refreshes.
test('old standard URLs redirect, keeping the language', async ({ page }) => {
	await page.goto('/de/articles/rcos-core/v0-1/02-layer-0-identity-scope');
	await expect(page).toHaveURL(/\/de\/standard\/core\/0\.1\/layer-0-identity-scope$/);
});

test('jump to a clause by its number', async ({ page }) => {
	await page.goto('/standard/core/0.1');
	await page
		.getByPlaceholder(/2\.3\.4/)
		.first()
		.fill('4.2.1');
	await page.keyboard.press('Enter');
	await expect(page).toHaveURL(/\/standard\/core\/0\.1\/[a-z0-9-]+#4\.2\.1$/);
	await expect(page.locator('[id="4.2.1"]')).toBeInViewport();
});

test('the print version is the whole core, without app JavaScript', async ({ request }) => {
	const html = await (await request.get('/de/standard/core/0.1/print')).text();
	expect(html).toContain('id="ch-layer-0-identity-scope"');
	expect(html).toContain('id="ch-glossary"');
	expect(html).toContain('name="robots" content="noindex"');
	expect(html).not.toContain('_app/immutable/entry');
});

test('old article URLs reach the new pages', async ({ page }) => {
	await page.goto('/de/articles/rcos-templates/layer-0/purpose-charter');
	await expect(page).toHaveURL(/\/de\/templates\/layer-0\/purpose-charter$/);
	await page.goto('/articles/rcos-stress-tests/culture-influence');
	await expect(page).toHaveURL(/\/stress-tests#layer-2$/);
});

for (const path of [
	'/library',
	'/templates',
	'/templates/layer-3/treasury-ruleset',
	'/layers/4-conflict-repair-accountability',
	'/stress-tests/founder-informal-veto',
	'/toolkit/self-assessment',
	'/safeguards/land-commons-anti-privatization',
	'/data'
]) {
	test(`${path} renders`, async ({ page }) => {
		const res = await page.goto(path);
		expect(res?.status()).toBe(200);
		await expect(page.locator('h1')).toHaveCount(1);
	});
}

test('the guide sheet opens from a clause', async ({ page }) => {
	await page.goto('/standard/core/0.1/layer-0-identity-scope');
	await page.getByRole('button', { name: 'Common question about clause 2.3.4' }).click();
	await expect(page.getByRole('dialog')).toContainText(
		'Can an emergency justify breaking an invariant?'
	);
});

test('⌘K searches in the page language and jumps to a clause', async ({ page }) => {
	await page.goto('/de');
	await page.keyboard.press('Control+k');
	await page.getByRole('combobox').fill('Austritt');
	const first = page.getByRole('dialog').getByRole('option').first();
	await expect(first).toBeVisible({ timeout: 15_000 });
	await page.getByRole('combobox').fill('2.3.4');
	await page.keyboard.press('Enter');
	await expect(page).toHaveURL(/\/de\/standard\/core\/0\.1\/layer-0-identity-scope#2\.3\.4$/);
});

test('search from the mobile menu focuses the search field', async ({ page }) => {
	await page.setViewportSize({ width: 390, height: 844 });
	await page.goto('/');
	await page.getByRole('button', { name: /menu/i }).first().click();
	await page
		.getByRole('dialog')
		.getByRole('link', { name: /Search/ })
		.click();
	await expect(page.getByRole('combobox')).toBeFocused();
});

for (const path of ['/admin', '/api/auth/debug']) {
	test(`${path} is gone`, async ({ request }) => {
		expect((await request.get(path)).status()).toBe(404);
	});
}

// Checks the server-rendered HTML, not the hydrated page: the locale must come
// from the URL at render time, or crawlers see English on every locale.
test('/de is rendered in German on the server', async ({ request }) => {
	const html = await (await request.get('/de')).text();
	expect(html).toContain('lang="de"');
	expect(html).toContain('Über uns');
});
