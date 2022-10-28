//Validação Simples FORMULÁRIO

const nome = document.getElementById('nomeid')
const telefone = document.getElementById('foneid')
const email = document.getElementById('emailid')
const mensagem = document.getElementById('textid')
const resultado = document.querySelector('#resultado')

function enviar(){
    if(nome.value ==='' || telefone.value ==='' || email.value ===''|| mensagem.value ===''){
      resultado.innerHTML= `<p>Favor preencher todos os campos!</p>`
    }else{
     resultado.innerHTML= `<p>Mensagem enviada!</p>`
    }
}