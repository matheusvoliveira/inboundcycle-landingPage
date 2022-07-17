const submitform = document.getElementById('form').submit();
function download(){
    const firstName = document.getElementById('name').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const legal = document.getElementById('legal');
    
    if (firstName.length == 0 || lastName.length == 0){
        alert("Su nombre o apellido no fue llenado correctamente!")
    } else if (!email.includes("@" || ".com")){
        alert("Tu e-mail no es válido!")
    } else if (!legal.checked){
        alert('Tienes que aceptar la política de privacidad!')
    } else {
        document.getElementById('form').submit();
        alert('Su formulario fue enviado, gracias!')
    }
}