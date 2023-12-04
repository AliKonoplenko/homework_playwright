import { test, expect } from '@playwright/test';
// import { MainPageNewborn } from './pages/mainPageNewborn';

test.describe('Verification steps for newborn website', () => {
    const USER = {
        email: 'email@dmytro.com',
        pwd: 'abc123',
        token: '',
    }

    const CATEGORY = {
    id: ''
    }

    test.beforeAll(async ({ request }) => {
        const response = await request.post(
            '/api/auth/login', {
            data: {
                email: USER.email,
                password: USER.pwd
            },
            headers: {
                "Content-Type": "application/json",
            },
        })
        expect(response.ok()).toBeTruthy()
        const body = await response.json()
        expect(body).toHaveProperty('token')
        USER.token = body.token
        console.log('AUTH', USER.token)
    })

    test.beforeEach(async ({ page }) => {
        page.addInitScript((value) => {
            window.localStorage.setItem('auth-token', value)
        }, USER.token)
        await page.goto('/overview')
    })

    test('create new category', async ({ request }) => {

        const response = await request.post('/api/category', {
            data: {
                name: 'BAKERY'
            },
            headers: {
                authorization: USER.token
            },
        })
        expect(response.ok()).toBeTruthy()
        const body = await response.json()
        expect(body).toHaveProperty('_id')
        CATEGORY.id = body._id
        console.log('id', CATEGORY.id)

    })

    test('check the category UI', async ({ request, page }) => {
   
        await page.goto('/categories');
        await expect(page.locator('a[class=collection-item]').nth(-1)).toContainText('SWEET', { timeout: 15000 })
    })

    test('delete the created category', async ({ request }) => {
        
        const response = await request.delete('/api/category/' + CATEGORY.id, {
            headers: {
                authorization: USER.token
            },
        })
        expect(response.ok())
        console.log('Category was deleted')
    })
})