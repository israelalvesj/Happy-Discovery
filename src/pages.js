const Database = require('./database/db');
const save = require('./database/saveOrphanage');

module.exports = {
    index(req, res){
        return res.render('index')
    },

    async orphanage(req, res){
        try {
            const db = await Database
            const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "4"')
            return res.render('orphanage', {orphanage})
        } catch (error){
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
    },

    async orphanages(req, res){
        try {
            const db = await Database;
            const orphanages = await db.all("SELECT * FROM orphanages")
            return res.render('orphanages', {orphanages})
        } catch (error){
            console.log(error)
            return res.send('Erro no banco de dados!')
        }
        
    },

    createOrphanage(req, res){
        return res.render('create-orphanage')
    }
}