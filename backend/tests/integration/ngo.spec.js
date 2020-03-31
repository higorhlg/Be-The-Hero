const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('NGO', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();  
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })
    it('should be able to create a new NGO', async () => {
        const response = await request(app)
        .post('/ngos')
        .send({
            name: "APAD",
            email: "contact@apad.com.br",
            whatsapp: "3918301012",
            city: "Rio Grande",
            uf: "SC"
        });
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
        // console.log(response.body);
    })
})