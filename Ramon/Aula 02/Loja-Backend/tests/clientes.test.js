const request = require('supertest')
const db = require('../db.json')
const app = require('../index')

var clienteTeste = {
    nome: 'Gabriel',
    email: 'gabriel@teste.com',
    senha: 'gabrielsenha',
    id: null
}

describe('GET /clientes', () => {
    it('pegar a lista de clientes com sucesso', async () => {
        const res = await request(app).get('/clientes').send();
        expect(res.status).toBe(200)
    })

    it('pegar cliente com sucesso', async () => {
        const res = await request(app).get('/clientes/2').send();
        expect(res.status).toBe(200)
    })

    it('pegar cliente que não existe com erro', async () => {
        const res = await request(app).get('/clientes/naoexiste').send();
        expect(res.status).toBe(404)
    })
})

describe('POST /clientes', () => {
    it(('criar cliente com sucesso'), async () => {
        const res = await request(app).post('/clientes').send(
            clienteTeste // body
        )
        
        clienteTeste = db.clientes.find(
            (cliente) => cliente.email == clienteTeste.email
        )

        expect(res.status).toBe(204)
    })

    it(('criar cliente sem nome com erro'), async () => {
        const res = await request(app).post('/clientes').send(
        {
            email: 'ramon@teste.com',
            senha: 'senhasupersegura'
        })
        expect(res.status).toBe(406)
    })

    it(('criar cliente sem email com erro'), async () => {
        const res = await request(app).post('/clientes').send(
            {
                nome: 'ramon teste',
                senha: 'senhasupersegura'
            })
        expect(res.status).toBe(406)
    })

    it(('criar cliente sem senha com erro'), async () => {
        const res = await request(app).post('/clientes').send(
            {
                nome: 'ramon teste',
                email: 'ramon@teste.com'
            })
        expect(res.status).toBe(406)
    })

    it(('atualizar cliente com sucesso'), async () => {
        const res = await request(app).post(`/clientes/${clienteTeste.id}`).send({
            nome: 'peperoni'
        })
        expect(res.status).toBe(200)
    })

    it(('atualizar cliente que nao existe com erro'), async () => {
        const res = await request(app).post('/clientes/naoexiste').send({
            nome: 'naoexiste'
        })
        expect(res.status).toBe(404)
    })

    it(('atualizar cliente sem dados com erro'), async () => {
        const res = await request(app).post('/clientes/2').send({})
        expect(res.status).toBe(406)
    })
})

describe('DELETE /clientes', () => {
    it('apagar cliente com sucesso', async () => {
        const res = await request(app).delete(`/clientes/${clienteTeste.id}`).send();
        expect(res.status).toBe(200)
    })

    it('apagar cliente que nao existe com erro', async () => {
        const res = await request(app).delete('/clientes/naoexiste').send();
        expect(res.status).toBe(404)
    })
})