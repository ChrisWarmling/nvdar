const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM series ORDER BY ordem DESC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM series WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { data_id, ordem, qtd_series } = req.body
        db.query('INSERT INTO series (data_id, ordem, qtd_series) VALUES ($1, $2, $3) RETURNING id', [data_id, ordem, qtd_series], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`serie add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { data_id, ordem, qtd_series } = req.body
        db.query('UPDATE series SET data_id = $1, ordem = $2, qtd_series = $3 WHERE id = $4', [data_id, ordem, qtd_series, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM series WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`serie deletada.`)
        })
    }
}