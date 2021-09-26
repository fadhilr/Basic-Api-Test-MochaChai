const supertest = require('supertest')
const {
    expect
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')

const payloadFile = require('../data/payload_data.json')


describe('@file Create user', () => {
    it('@itpassed succes create user by tag', async () => {
        console.log(payloadFile)
        let firstPayload = payloadFile
        const response = await page.createUser(firstPayload)
        // console.log(response.body.data[0].id)
        console.log(response.body)

        expect(response.status).to.equal(200)
    })
})