const axios = require('axios')

describe('Actions for website', async () => {
    let baseURL = 'https://jsonplaceholder.typicode.com'

    it('Create resource', async () => {
        const createResource = await axios.post(`${baseURL}/posts`,
            {
                'title': 'Sausage',
                'body': 'Meat',
                'userId': 101,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log(createResource.data)
    })

    it('Get resource #1', async () => {
        const getResource = await axios.get(`${baseURL}/posts/1`)
        console.log(getResource.data)
    })

    it('Update resource #1', async () => {
        const updateResource = await axios.put(`${baseURL}/posts/1`,
            {
                'title': 'Cheese',
                'body': 'Milk',
                'userId': 202,
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        console.log(updateResource.data)
    })
})