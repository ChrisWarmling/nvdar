const db = require('../config/dbConnect')
module.exports = {
    async get(req, res) {
        db.query('SELECT * FROM exercicios ORDER BY nome DESC', (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async getId(req, res) {
        const id = req.params.id
        db.query('SELECT * FROM exercicios WHERE id = $1', [id], (error, results) => {
            if (error) { throw error }
            res.status(200).json(results.rows)
        })
    },
    async post(req, res) {
        const { categoria_id, nome, pr_regresao, sg_regresao, pr_progresao, sg_progresao } = req.body
        db.query('INSERT INTO exercicios (categoria_id, nome, pr_regresao, sg_regresao, pr_progresao, sg_progresao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [categoria_id, nome, pr_regresao, sg_regresao, pr_progresao, sg_progresao], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`exercicio add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { categoria_id, nome, pr_regresao, sg_regresao, pr_progresao, sg_progresao } = req.body
        db.query('UPDATE exercicios SET categoria_id = $1, nome = $2, pr_regresao = $3, sg_regresao = $4, pr_progresao = $5, sg_progresao = $6 WHERE id = $7', [categoria_id, nome, pr_regresao, sg_regresao, pr_progresao, sg_progresao, id], (error, results) => {
            if (error) { throw error }
            res.status(200).send(`Modificado.`)
        })
    },
    async delete(req, res) {
        const id = req.params.id
        db.query(`DELETE FROM exercicios WHERE id = $1`, [id], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`exercicio deletado.`)
        })
    }
}