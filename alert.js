const clicarAlerta = document.querySelector("#conhecaProdutos");

 clicarAlerta.addEventListener("click", function(){
    alert("Faça o Login ou Cadastre-se");
 });

 function irParaPagina2() {
    window.location.href = 'ecommerce.html';
}