$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000' , {
        placeholder: '(00) 00000-0000'
    })
    
    $('form').validade({
        rules: {
            nome:{
                required:true
            },
            email:{
                required: true,
                email: true
            },telefone: {
                required:true
            }
        }
    })
})