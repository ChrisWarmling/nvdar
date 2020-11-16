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
        const { categoria_id, nome, pr_regressao, sg_regressao, pr_progressao, sg_progressao } = req.body
        db.query('INSERT INTO exercicios (categoria_id, nome, pr_regressao, sg_regressao, pr_progressao, sg_progressao) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id', [categoria_id, nome, pr_regressao, sg_regressao, pr_progressao, sg_progressao], (error, results) => {
            if (error) { throw error }
            res.status(201).send(`exercicio add.`)
        })
    },
    async put(req, res) {
        const id = req.params.id
        const { categoria_id, nome, pr_regressao, sg_regressao, pr_progressao, sg_progressao } = req.body
        db.query('UPDATE exercicios SET categoria_id = $1, nome = $2, pr_regressao = $3, sg_regressao = $4, pr_progressao = $5, sg_progressao = $6 WHERE id = $7', [categoria_id, nome, pr_regressao, sg_regressao, pr_progressao, sg_progressao, id], (error, results) => {
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