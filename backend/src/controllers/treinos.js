const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM treinos ORDER BY created_at ASC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM treinos WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { treino } = req.body
        db.query('INSERT INTO treinos (treino) VALUES ($1) RETURNING id', [treino], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`treino add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { treino } = req.body
        db.query('UPDATE treinos SET treino = $1 WHERE id = $2', [treino, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM treinos WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`treino deletado.`)
        })
    }
}