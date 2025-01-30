const express = require("express");
const router = express.Router();
const posts = require("../model/posts");
const cors = require ('cors');

const options ={
    origin: "http://localhost:8000" // O node barra as requisições feitas por outros domínios que não seja o seu, mas podemos ter por exemplo amazon.com e
    //amazon.com.br então é necessário poder acessar por esse dois domínios então o cors faz com que ele libere para esses dois, utilizandos outras funções
    //podemos configurar mais domínios
}

router.use(cors(options));

router.get("/all",(req, res)=>{
    res.json(JSON.stringify(posts.getAll()));
})

router.post("/new",(req, res)=>{   
    let id = generateID();
    let title = req.body.title;
    let desc = req.body.desc;

    posts.newPost(id, title, desc) // id pode estar errado

    res.send("Post adicionado com sucesso")

   
})

function generateID(){
    return Math.random().toString(36).substring(2,9);

}


module.exports = router;