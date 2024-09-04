const request = require('supertest')
const db = require('../db.json')
const app = require('../index')

var produtoTeste = {
    nome: 'Teclado',
    preco: 100,
    id: null
}

describe('GET /produtos', () => {
    it('pegar a lista de produtos com sucesso', async () => {
        const res = await request(app).get('/produtos').send();
        expect(res.status).toBe(200)
    })

    it('pegar produto com sucesso', async () => {
        const res = await request(app).get('/produtos/2').send();
        expect(res.status).toBe(200)
    })

    it('pegar produto que não existe com erro', async () => {
        const res = await request(app).get('/produtos/naoexiste').send();
        expect(res.status).toBe(404)
    })
})

describe('POST /produtos', () => {
    it(('criar produto com sucesso'), async () => {
        const res = await request(app).post('/produtos').send(
            produtoTeste // body
        )
        
        produtoTeste = db.produtos.find(
            (produto) => produto.nome == produtoTeste.nome
        )

        expect(res.status).toBe(204)
    })

    it(('criar produto sem nome com erro'), async () => {
        const res = await request(app).post('/produtos').send(
        {
            preco: 100
        })

        expect(res.status).toBe(406)
    })

    it(('criar produto sem preco com erro'), async () => {
        const res = await request(app).post('/produtos').send(
            {
                nome: 'Televisao'
            })
        expect(res.status).toBe(406)
    })

    it(('atualizar produto com sucesso'), async () => {
        const res = await request(app).post(`/produtos/${produtoTeste.id}`).send({
            nome: 'Cadeira Gamer'
        })
        expect(res.status).toBe(200)
    })

    it(('atualizar produto que nao existe com erro'), async () => {
        const res = await request(app).post('/produtos/naoexiste').send({
            nome: 'naoexiste'
        })
        expect(res.status).toBe(404)
    })

    it(('atualizar produto sem dados com erro'), async () => {
        const res = await request(app).post('/produtos/2').send({})
        expect(res.status).toBe(406)
    })
})

describe('DELETE /produtos', () => {
    it('apagar produto com sucesso', async () => {
        console.log(produtoTeste.id)
        const res = await request(app).delete(`/produtos/${produtoTeste.id}`).send();
        expect(res.status).toBe(200)
    })

    it('apagar produto que nao existe com erro', async () => {
        const res = await request(app).delete('/produtos/naoexiste').send();
        expect(res.status).toBe(404)
    })
})