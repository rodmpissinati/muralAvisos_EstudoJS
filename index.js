const express = require("express");
const app = express();
const apiRoute = require("./routes/api");
const path = require("path"); // Ajuda a pegar o caminho da pasta public
const port = 8000;
app.use(express.json());

app.use("/api", apiRoute);
app.use(express.static(path.join(__dirname, "public"))); // Essa linha deixa a página public pública, o join junta e o diername                                                                               
                                                        // é o nome do diretório

app.listen(port,()=>{
    console.log("Rodando")
})

// Para rodar o projeto no navegador http://localhost:8000/html/