const supertest = require('supertest')
const {
    expect, assert
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')
const chai = require('chai')
chai.use(require('chai-json-schema'))
const schema = require('../data/schema.json')

describe('test with @schema assertion get user', () => {
    it('suces get user', async () => {
        const queryParam = {
            "name": "Fadhil"
        }
        const response = await page.getAllUser(queryParam)
        // console.log(response.body.data[3].hobbies[0])
        expect(response.status).to.equal(200)
        console.log(response.body)
        expect(response.body).to.be.jsonSchema(schema)
    })
})