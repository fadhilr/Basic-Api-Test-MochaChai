const supertest = require('supertest')
const {
    expect,
    assert
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')
const payloadFile = require('../data/payload_data.json')

describe('using @before hoock check user', () => {
    let id = ''
    before(async () => {
        const response = await page.createUser(payloadFile)
        expect(response.status).to.equal(200)

        id = response.body.id
    })

    it('succes create user by tag', async () => {
        const responseGet = await page.getDetailUser(id)
        // console.log(response.body.data[0].id)

        expect(responseGet.status).to.equal(200)
    })
})