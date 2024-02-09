//NO DEBE HABER INPUTS VACIOS, telefono debe ser de 10 digitos awebo, genero debe estar seleccionado, edad minimo 18 años, emeail debe incluir @ y .com, edo civil debe ser aceptado, si uno esta vacio, manda alerta de que falta x cosa


 
function registroExitoso(){
    alert('¡Registro exitoso!');
}


function enviar(event){
    let nombre  = document.getElementById('nombre').value;
    let direccion = document.getElementById('direccion').value;
    let telefono= document.getElementById('telefono').value;
    let edad = document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    
    let aceptoCondiciones = document.getElementById('aceptoCondiciones');
    
    let estadocivil = document.getElementById('estadocivil');
    let seleCivil = estadocivil.options[estadocivil.selectedIndex].text; 

    let genero = document.getElementById('genero');
    let selected = genero.options[genero.selectedIndex].text;
    

    if(nombre.length <= 2 || direccion.length <= 2){
        alert('Valores inválidos, favor de llenar correctamente los campos');
    }else if(telefono.length != 10){
        alert('El teléfono debe tener un valor de 10 dígitos');
        
    }else if(edad<=17){
        alert('Debe ser mayor de edad para asistir a la conferencia');
    }else if(!email.includes('@') && !email.includes('.com')){
        alert('El email debe incluir @ y .com');
    }else if(selected == 'Seleccione' ||  seleCivil == 'Seleccione' ){
        alert('Favor de llenar las opciones a seleccionar');
    }else if(!aceptoCondiciones.checked){
        alert('Favor de aceptar los términos y condiciones');
    }else {
        registroExitoso();
        document.write("<strong>***GRACIAS POR SU REGISTRARSE A LA CONFERENCIA***</strong><br>");
        document.write("Nombre: " + nombre + "<br>" + "<br>");
        document.write("Dirección: " + direccion + "<br>" + "<br>");
        document.write("Telefono: " + telefono + "<br>" + "<br>");
        document.write("Edad: " + edad + "<br>" + "<br>");
        document.write("Email: " + email + "<br>" + "<br>");
        document.write("Genero: " + selected + "<br>" + "<br>");
        document.write("<a href=\"index.html\">Volver</a>");
        document.write("<br>" + "<br>");    
    } 
	event.preventDefault();

}