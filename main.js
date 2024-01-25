//const cripButton = document.querySelector('.crip');
//const descripButton = document.querySelector('.descrip');
console.log('arquivo funcionando')
function Criptografia(){
   // const botoes = document.querySelector('.descrip');
    this.card = document.querySelector('.card-body');
    this.texto = document.querySelector('.input');
    this.botaoCopiar = document.querySelector('.copiar');

this.inicia = () => {
    this.capturaCliques()
}


this.capturaCliques = () => {
    document.addEventListener('click',event => {
        const elemento = event.target;

        if(elemento.classList.contains('crip')){ 
            this.criptografar(this.texto.value);
            this.botaoCopiar.style.display = 'block';
        };
         if(elemento.classList.contains('descrip')) {
            this.descriptografar(this.texto.value);
            this.botaoCopiar.style.display = 'block';

         };
        
         if(elemento.classList.contains('copiar')) this.copiar();

         
        
        })

       
}


this.criptografar = (texto) => {
   
//     A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
var e = texto.split('e');
var junta = e.join('enter');

var i = junta.split('i');
junta = i.join('imes');

var a = junta.split('a');
junta = a.join('ai');

var o = junta.split('o');
junta = o.join('ober');

var u = junta.split('u');
junta = u.join('ufat');






 this.card.innerHTML = junta;

}

this.descriptografar = (texto) => {
    var e = texto.split('enter');
    var junta = e.join('e');

    var i = junta.split('imes');
    junta = i.join('i');

    var a = junta.split('ai');
    junta = a.join('a');

    var o = junta.split('ober');
    junta = o.join('o');

    var u = junta.split('ufat');
    junta = u.join('u');

this.card.innerHTML = junta;

}

this.copiar = () => {
    var selecao = window.getSelection();
var faixa = document.createRange();
faixa.selectNode(this.card);
selecao.removeAllRanges();
selecao.addRange(faixa);
 document.execCommand('copy')

} 
}

const app = new Criptografia();
app.inicia();





