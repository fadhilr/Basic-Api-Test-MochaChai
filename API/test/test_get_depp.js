const supertest = require('supertest')
const {
    expect, assert
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')

describe('@deep assertion get user', () => {
    it('suces get user', async () => {
        const queryParam = {
            "name": "Fadhil"
        }
        console.log(queryParam)
        const response = await page.getAllUser(queryParam)
        console.log(response.body.data[3].hobbies[0])
        expect(response.status).to.equal(200)
        expect(response.body.data[3].hobbies[0]).to.equal('Badmintion')
        assert.equal(response.body.data[3].hobbies[0], "Badmintion", "not equal")
    })
})