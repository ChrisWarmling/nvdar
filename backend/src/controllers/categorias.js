const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM categorias ORDER BY nome DESC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM categorias WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { nome } = req.body
        db.query('INSERT INTO categorias (nome) VALUES ($1) RETURNING id', [nome], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`categoria add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { nome } = req.body
        db.query('UPDATE categorias SET nome = $1 WHERE id = $2', [nome, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM categorias WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`categoria deletada.`)
        })
    }
}