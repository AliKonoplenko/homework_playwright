const { test, expect } = require('@playwright/test');

test('test5', async ({ page }) => {
    const input = page.locator('input.gsc-input')

    await page.goto('https://www.guru99.com/')

    await page.mouse.move(0, 100, 3)

    await input.click()
    await input.fill('sap')
    await input.clear()
    await input.pressSequentially('SAP')
    await input.pressSequentially('Tutorial', { delay: 200 })
})
