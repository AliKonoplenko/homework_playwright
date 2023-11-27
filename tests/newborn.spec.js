const { test, expect } = require('@playwright/test');

test('check the state after open page', async ({ page }) => {
    await page.goto('https://www.google.com/')
    await expect(page.locator('span.card-title').nth(0)).toBeVisible()
})