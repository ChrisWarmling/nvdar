const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM dias ORDER BY dia ASC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM dias WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { dia } = req.body
        db.query('INSERT INTO dias (dia) VALUES ($1) RETURNING id', [dia], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`dia add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { dia } = req.body
        db.query('UPDATE dias SET dia = $1 WHERE id = $2', [dia, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM dias WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`dia deletado.`)
        })
    }
}