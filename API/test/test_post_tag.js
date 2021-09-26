const supertest = require('supertest')
const {
    expect
} = require('chai')
const page = require('../page/user_page')
const global = require('../common/global')

const payload = {
    "id": "1",
    "firstName": "Fadhil",
    "lastName": "Rizqullah",
    "age": 24,
    "occupation": "Karyawan",
    "nationality": "Indonesia",
    "hobbies": [
        "Badmintion"
    ],
    "gender": "MALE",
    "createdDate": global.now,
    "updatedDate": "2021-09-12T04:40:30.447Z"
}


describe('@intermediate Create user', () => {
    it.skip('@itpassed succes create user by tag', async () => {
        // console.log(payload)
        const response = await page.createUser(payload)
        // console.log(response.body.data[0].id)

        expect(response.status).to.equal(200)
    })
    it('@itfailed fail create user by tag', async () => {
        // console.log(payload)
        const response = await page.createUser(payload)
        // console.log(response.body.data[0].id)

        expect(response.status).to.equal(400)
    })
})