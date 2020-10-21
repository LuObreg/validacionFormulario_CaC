function validarCampos(){
    var user = document.getElementById('user').value;
    
    var clave = document.getElementById('clave').value;

    if(user.indexOf('@') == -1){
        alert("El usuario debe contener una arroba @.")
    }
    if(user == 'undefined' || user == ''){
        alert("Debe ingresar un usuario")
    }
    if(clave == 'undefined' || clave == ''){
        alert("Debe ingresar una contraseña")
    }
}