module.exports = {posts: [
    {id: 1 , title: "Start", desc: "Start nos jogos" },
],
    getAll(){
         return this.posts
    },
    
    newPost(id, title, desc){ // correção não havia passado no parãmetro
        this.posts.push({id: generateID(), title, desc})
    }
}

function generateID(){
    return Math.random().toString(36).substring(2,9); // aqui é 36, pois gera letras e números, alfabeto 26 letras e números de 0 a 9 são 10 
    // E o substr é uma substring e pega os num de da segunda string a 9
    }

