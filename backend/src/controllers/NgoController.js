const connection = require('../database/connection');
const crypto = require('crypto');
const generateUniqueId= require('../utils/generateUniqueId');

module.exports = {
    async index(req, res){
        const ngos = await connection('ngos').select('*');

        return res.json(ngos);
    },
    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ngos').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        });

        // console.log(data);
        return res.json({ id });
    }
}