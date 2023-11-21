const { test, expect } = require('@playwright/test');

test.describe('Open Ain website', () => {
    test('open the main page', async ({ page }) => {
        await page.goto('https://ain.ua/')
    })



    test.skip('test 1', async ({ page }) => {
        await page.goto('https://ain.ua/');
        await page.goto('https://ain.ua/post-list/');
        await expect(page.getByRole('heading', { name: 'Останні новини' })).toBeVisible();
        await page.locator('#menu-ukr-menyu').getByRole('link', { name: 'Інвестиції' }).click();
        await expect(page.getByRole('heading', { name: 'інвестиції' })).toBeVisible();
        await page.locator('#menu-ukr-menyu').getByRole('link', { name: 'Стартапи' }).click();
        await expect(page.getByRole('heading', { name: 'стартапи' })).toBeVisible();
        await page.locator('#menu-ukr-menyu').getByRole('link', { name: 'Новини' }).hover()
        await page.getByRole('link', { name: 'Дія' }).click();
        await expect(page.getByRole('heading', { name: 'Дія' })).toBeVisible();
        await page.getByRole('link', { name: 'Уряд перевів проєкт «е-Підприємець» на постійну основу — що змінилось' }).click();
        await expect(page.getByRole('heading', { name: 'Уряд перевів проєкт «е-Підприємець» на постійну основу — що змінилось' })).toBeVisible()
    });

    test.skip('test 2', async ({ page }) => {
        await page.goto('https://ain.ua/');
        await page.goto('https://ain.ua/tag/investycziyi/');
        await page.locator('#header').getByRole('link', { name: 'RU' }).click();
        await page.goto('https://ain.capital/');
        await page.goto('https://ain.ua/');
        await page.goto('https://ain.ua/2023/11/14/victory-drones-kurs-narodnyj-fpv/');
        await page.locator('#header svg').click();
        await page.getByRole('textbox').press('Escape');
        await page.locator('#header path').click();
        await page.getByRole('textbox').fill('криптовалюти');
        await page.getByRole('textbox').press('Enter');
        await page.getByRole('link', { name: 'Всі результати' }).click()

    });

    test('test 3', async ({ page }) => {
        const input = page.locator('#keywords')

        await page.goto('https://ain.ua/');
        await page.goto('https://recruitika.com/');
        await page.getByText('Яку роботу ви шукаєте?').click();
        await input.fill('QA Engineer');
        await input.clear();
        await input.pressSequentially('QA Engineer', {delay : 200});
        await page.mouse.move(0, 100, 3)
        // await page.locator('#keywords').press('Enter');
        // await page.locator('div:nth-child(2) > .frequent-search > span').first().click();
        // await page.getByRole('link', { name: 'QA / QC' }).click();
        // await expect(page.getByText('Київ, QA / QC')).toBeVisible();
        // await page.locator('.clear-filters').click();
        // await page.locator('span').filter({ hasText: 'Python' }).click();
        // await page.locator('#keywords').fill('PHP');
        // await page.locator('#keywords').click();
        // await page.locator('#keywords').fill('');
        // await page.locator('#keywords').press('Enter')
    });
})

