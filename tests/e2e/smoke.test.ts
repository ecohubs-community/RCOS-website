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
