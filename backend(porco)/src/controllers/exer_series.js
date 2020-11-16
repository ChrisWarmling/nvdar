const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM exer_series ORDER BY id DESC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM exer_series WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { id_serie, id_exercicio, qtd_repeticoes } = req.body
        db.query('INSERT INTO exer_series (id_serie, id_exercicio, qtd_repeticoes) VALUES ($1, $2, $3) RETURNING id', [id_serie, id_exercicio, qtd_repeticoes], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`exer_serie add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { id_serie, id_exercicio, qtd_repeticoes } = req.body
        db.query('UPDATE exer_series SET id_serie = $1, id_exercicio = $2, qtd_repeticoes = $3 WHERE id = $4', [id_serie, id_exercicio, qtd_repeticoes, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM exer_series WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`exer_serie deletada.`)
        })
    }
}