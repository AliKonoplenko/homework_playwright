// import axios from 'axios'
const axios = require('axios')
const {expect} = require('chai');
const { create } = require('domain');

describe('Actions for dummy website', async () => {
    let baseURL = 'https://dummyjson.com'
    let userId;
    let userName;
    let userPwd;
    let token;

    it.skip('Create user', async () => {
        const createUser = await axios.post('https://dummyjson.com/users/add',
            {
                'firstName': 'Oli',
                'lastName': 'Ali',
                'age': 250,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log(createUser.data)
        userId = createUser.data.id
    })

    it('get user by id', async () => {
        const getUser = await axios.get('https://dummyjson.com/users/1')
        console.log(getUser.data)
        userName = getUser.data.username
        userPwd = getUser.data.password
    })

    it('getting credentials', async () => {
        const getTokenData = await axios.post(`${baseURL}/auth/login`,
            {
                'username': userName,
                'password': userPwd,
                expiresInMins: 60
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        // console.log(getTokenData.data)
        token = getTokenData.token
    })

    it('create product', async () => {
        const createProduct = await axios.post(`${baseURL}/products/add`,
            {
                'title': 'MyProduct'
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(createProduct.data)
            expect(createProduct.status).equal(200)
    })

    // updating user with id 101
    it.skip('update user data', async () => {
        const updateUserData = await axios.patch('https://dummyjson.com/users/101',
            {
                'maidenName': 'nameMaiden',
                'age': 400,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        // console.log(updateUserData.data)
        console.log(updateUserData.statusText)
    })
})