const supertest = require('supertest')
const {
    expect
} = require('chai')

const api = supertest('http://localhost:1234')
const path = '/v1/users'

function createUser() {
    // console.log(payload)
    return api.post(path)
        .send(payload)
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
}

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
    "createdDate": "2021-09-12T04:40:30.447Z",
    "updatedDate": "2021-09-12T04:40:30.447Z"
}

describe('Create user', () => {
    it('As a system, I want to create new user', async () => {
        const response = await createUser()
        // console.log(response.body)
        expect(response.status).to.equal(200)
    })
})