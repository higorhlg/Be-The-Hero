// NGO Incidents are described in it's profile
const connection = require('../database/connection');

module.exports = {
    async index (req, res){
        const id = req.headers.authorization;
        console.log(id);
        const incidents = await connection('incidents').where('ngo_id', id).select('*');
        console.log(incidents)
        return res.json(incidents);
    }
}