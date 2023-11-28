const { test, expect } = require('@playwright/test');
// import { test, expect } from '@playwright/test';


test('location for britain', async ({ page }) => {
    await page.goto('https://www.google.com/');
    await page.getByRole('button', { name: 'Accept all' }).click();
    await page.getByLabel('Search', { exact: true }).click();
    await page.getByLabel('Search', { exact: true }).fill('zara.com');
    await page.getByLabel('Search', { exact: true }).press('Enter');
    await page.getByRole('link', { name: 'ZARA Official Website Zara' }).click();
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.getByLabel('United Kingdom').isVisible();
});