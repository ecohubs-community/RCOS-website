import { expect, test } from '@playwright/test';

test('home renders with a single h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.locator('h1')).toHaveCount(1);
});

test('a standard chapter renders its clauses', async ({ page }) => {
	await page.goto('/articles/rcos-core/v0-1/layer-0-identity-scope');
	await expect(
		page.getByText('A community MUST define exactly one primary purpose.')
	).toBeVisible();
});

for (const path of ['/admin', '/api/auth/debug']) {
	test(`${path} is gone`, async ({ request }) => {
		expect((await request.get(path)).status()).toBe(404);
	});
}
