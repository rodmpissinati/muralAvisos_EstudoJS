document.addEventListener('DOMContentLoaded', ()=>{
    showPosts();
})
// Essa linha garante que a função de mostrar os posts apenas seja executada ao carregar toda a página

function newPost(){

    let title = document.getElementById("title").value;
    let desc = document.getElementById("desc").value;

    let post = {title: title, desc: desc}; // esse é um objeto e title é a mesma coisa de title:title e desc desc:desc

    const options = {method:"POST", 
        headers: new Headers({"Content-Type": "application/json"}),  // aqui informamos que o método da mensagem é POST e não GET como o original, o headers e o cabeçalho da mensagem onde se
        // tem as configs e é necessário passar que o formato será um json, pois post é um objeto
     
        body: JSON.stringify(post)} // aqui convertemos o objeto para string
  
    fetch("http://localhost:8000/api/new", options).then(res=>{ // enviando os dados, pela rota 
        // chamando a função para quando o post for criado a exibição de posts seja atualizada

        showPosts();

        document.getElementById("title").value="" // Limpando a caixa de texto
        document.getElementById("desc").value=""

        
    })

}

function showPosts(){

    fetch("http://localhost:8000/api/all").then(res=>{
        return res.json();
        // o then é uma promisse, e o res um call back, é necessário transformar a resposta em json, pois o navgador(console(body)) não consegue  "ler"
    // esse tipo da mensagem

    }).then(json=>{
       // Não está sendo usado console.log(json);// agora caso a conversão der certo entra nessa outra promisse que printa no console os posts

        let postElements = ""

        let posts = JSON.parse(json); // transformar o json que veio como string em objeto (primeiramente o json converte o objeto em string, por isso temos que converter)
       // Não está sendo usado console.log(posts) // é a mesma coisa do console acima, mas agora convertido
       posts.forEach((post)=>{// como os posts estão dentro de um array um por um será retirado e colocado e exebido nas tags html
            let postElement = ` <div class="card mb-4" id= ${post.id}>
                <div class="card-header">
                    <h5 class="card-title">${post.title}</h5>
                </div>
                <div class="card-body">
                    <div class="card-text">${post.desc}</div>
                </div>
            </div>`

        postElements += postElement;

       })

       document.querySelector(".posts").innerHTML = postElements;

    })
    
}