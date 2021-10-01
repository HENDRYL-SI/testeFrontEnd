$(function() {
 
   
    $('form#form').submit(function() {      
        var nome = $('form input[name=nome]').val();
        var email = $('form input[name=email]').val();
    

    // aqui é a verificação individual do input nome
    function verificarNome(nome) {
        if (nome == '') { return false;}
        var espaço = nome.split(' ').length;
        if (espaço > 2) {
        }else{return false;}
    }

// aqui é a verificação individual do campo email
    function verificarEmail(email) {
        if (email == '') {return false};
        if (email.match(/^([a-z0-9 -_.]{1,})+@+([a-z.]{1,})$/)) {
            
        }else{return false;}
    }


    // aqui é a verificação final dos inputs
    if (verificarNome(nome) == false) {
        campoInvalido($('form input[name=nome]'))
        return false;
     }else if (verificarEmail(email) == false){
         campoInvalidoDois($('form input[name=email]'));
        return false;
     }
     alert('informações enviadas!')
})

// aqui são as verificações adicionais
    function campoInvalido(el){
        el.css('color','red');
        el.val('Campo inválido'); 
    }
    function campoInvalidoDois(el){
        el.css('color','red');
        el.val('Por favor informe um e-mail válido'); 
    }


    function resetarCampoInvalido(el) {
        el.css('color','#ccc');
        el.css('border','1px solid #ccc');
        el.val(' ');
    }

   $('form input[type=text]').focus(function () {
        resetarCampoInvalido($(this));
       
   })

})
