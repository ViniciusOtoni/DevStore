import db from './db.js';
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
app.use(express.json())



app.post('/login', async (req, resp) => {
    
    const login = req.body;
    
   

    
    let r = await db.tb_usuario.findOne(
        { 
            where: { ds_login: login.usuario, 
                     ds_senha: login.senha
                    },
                    raw: true
        })
        
    
    if (r == null)
     return resp.send( { error: 'Credenciais Inválidas'});

    delete r.ds_senha;
    resp.send(r);
})


app.post('/registrar', async (req, resp) => {
    try {
        
        let usuParam = req.body;

        let u = await db.tb_usuario.findOne({ where: { nm_usuario: usuParam.nome} });
        if (u != null)
        return resp.send({ erro: 'Usuario Já Existe' })
       

        let u1 = await db.tb_usuario.findOne({ where: { ds_login: usuParam.login} });
        if (u1 != null)
        
        return  resp.send({ erro: 'Usuário já existe!' });
       
        
        let r = await db.tb_usuario.create({
            nm_usuario: usuParam.nome,
            ds_login: usuParam.login,
            ds_senha: usuParam.senha,
            img_usuario: usuParam.img
        })
        resp.send(r);
    } catch (e) {
        resp.send({ erro: 'Ocorreu um erro!'})
    }
})

app.get ('/registrar', async (req, resp) => {
    let r =  await db.tb_usuario.findAll({ order:[[ 'id_usuario', 'desc']] })
    resp.send(r);
})



app.get('/produto', async (req, resp) => {
    try {
        let r = await db.tb_produto.findAll()
        resp.send(r)
    } catch (error) {
        resp.send({ erro: error })
    }
})


app.post('/produto', async (req, resp) => {
try {
    
    let r = req.body;

    let p = await db.tb_produto.findOne({ where:{ nm_produto: r.nm_produto } })
    if(p != null)
    return resp.send({ erro: 'Produto Já Existe' })

    let s = await db.tb_produto.create({
        nm_produto: r.nm_produto,
        ds_categoria: r.ds_categoria,
        vl_preco_de: r.vl_preco_de,
        vl_preco_por: r.vl_preco_por,
        vl_avaliacao: r.vl_avaliacao,
        ds_produto: r.ds_produto,
        qtd_estoque: r.qtd_estoque,
        img_produto: r.img_produto,
        bt_ativo: r.bt_ativo,
        dt_inclusao: r.dt_inclusao
       
    })
    resp.send(s);
} catch (error) {
    resp.send({ erro: "Digite Devidamente Os valores dos Campos!" })
}
})

app.put('/produto/:id', async (req, resp) => {
    try {
        
        
        let r = req.body;

        let r1 = await db.tb_produto.update({ 
            
            nm_produto: r.nm_produto,
            ds_categoria: r.ds_categoria,
            vl_preco_de: r.vl_preco_de,
            vl_preco_por: r.vl_preco_por,
            vl_avaliacao: r.vl_avaliacao,
            ds_produto: r.ds_produto,
            qtd_estoque: r.qtd_estoque,
            img_produto: r.img_produto,
            bt_ativo: r.bt_ativo,
            dt_inclusao: r.dt_inclusao
        
        },
        {
            where: { id_produto: req.params.id }
        });
        resp.sendStatus(200)
    } catch (error) {
        resp.send( { erro: "Não foi Possível Concluir essa alteração!, Verifique Se os Campos estão corretos!" })
    }
});

app.delete('/produto/:id', async (req, resp) => {
try {
    let r = await db.tb_produto.destroy({ where: { id_produto: req.params.id } })
    resp.sendStatus(200)
} catch (error) {
    resp.send( { erro: error.toString() })
}
})



app.listen(process.env.PORT,
           x => console.log(`Servidor Subiu na Porta ${process.env.PORT} '-' `))