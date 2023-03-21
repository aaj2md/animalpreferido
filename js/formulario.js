/************************************/
     /*scripts para los formularios*/
   /************************************/
   /* Identificar campos de formulario */
   var miformulario= document.getElementById('form-contacto');
  
   var campoNombre= document.getElementById('dato-usuario');//ok
   var campoCorreo= document.getElementById('dato-email');//ok
   var campoCorreoRep= document.getElementById('dato-emailrepetido');//ok
   var campoTelefono= document.getElementById('dato-telefono');//ok
   var cajaServicios=document.getElementById('caja-servicios');//ok
   var areaTematica=document.getElementById('area-tematica');//ok
   var cajaGuias=document.getElementById('caja-guias');//ok
   var campoComentarios = document.getElementById('dato-consulta');//ok
   var cajaClausulas = document.getElementById('dato-clausulas');//ok
   var cajaRecuento = document.getElementById('caja-recuento');//ok
 
    //identificar mensajes de error:
    var msjNombre= document.getElementById('msj-nombre');//este elemento es cuando tenia que actuar cuando el nombre me de un error
    var msjCorreo= document.getElementById('msj-email');
    var msjCorreoRep= document.getElementById('msj-emailrepetido');//ok
    var msjTelefono= document.getElementById('msj-telefono');//ok
    var msjServicios=document.getElementById('msj-llamada');//ok
    var msjTematica=document.getElementById('msj-tematica');//ok
    var msjGuias=document.getElementById('msj-guias');//ok
    var msjComentarios = document.getElementById('msj-consulta');//ok
    var msjClausulas = document.getElementById('msj-clausulas');
 
   
    var todosLosMsjError= document.querySelectorAll('.mensaje-error');
 
   //variables
   var valorNombre = null;
   var valorCorreo = null;
   var valorCorreoRep=null;
   var valorTel = null;
   var valorComentario = null;
   
   //var valorComentario = null;
  
 
   //expresiones para validación que pueda escribir con letras con ñ con tilde
   var patronNombre=/^[\w\sñáeíóú]{2,15}$/i;
   var patronCorreo=/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
   var patronTel=/^(?:[+]?(?:[0-9]{1,5}|\\x28[0-9]{1,5}\\x29)[ ]?)?[0-9]{2}(?:[0-9][ ]?){6}[0-9]$/;
   var patronVacio=/^\s+$/;
  
   
   
   function validarFormulario(evento){
 
     for(let i=0; i<todosLosMsjError.length; i++){
             todosLosMsjError[i].style.display="none";
         }
 
   var momentoLLamada=document.querySelectorAll('[name="momento-llamada"]:checked');//la cosa aqui es capturar los que estar capturados nos va a pillar de los imput que estan ahi lo que estan seleccionados me pilla los que estan chequeados con :checked
   var campoGuias=document.querySelectorAll('[name="guias-consulta"]:checked');
   var campoClausulas=document.querySelectorAll('[name="dato-clausulas"]:checked');
 
   
 
   //obtener valores de campos//si lo sacas fuera no se va a refrescar 
     valorNombre=campoNombre.value;
     valorCorreo=campoCorreo.value;
       valorCorreoRep=campoCorreoRep.value;
     valorTel=campoTelefono.value;
     valorComentario = campoComentarios.value;
    
     //comienza el chequeo de datos
     //alert('hola');
 
   
     
 if(!patronNombre.test(valorNombre) || valorNombre==null){//quiere decir sino se cumple el patron debes insertar un nombre correcto
     msjNombre.style.display="block";
     //alert('debes insertar un nombre de usuario valido escriba su nombre entre dos y quince caracteres');
     evento.preventDefault();//esto hace que me vaya anulara el formulario
     campoNombre.focus();
 
 }else if(!patronCorreo.test(valorCorreo)){//sino lo cumple el testeo del valor correo
     msjCorreo.style.display="block";
         //alert('inserte un correo valido');
         evento.preventDefault();
         campoCorreo.focus();
 
 }else if(valorCorreo!=valorCorreoRep){
     msjCorreoRep.style.display="block";
         //alert('No coincide tu correo');
         evento.preventDefault();
         campoCorreoRep.focus();
 
 }else if(!patronTel.test(valorTel) || valorTel==null){
     msjTelefono.style.display="block";
     //alert('debes insertar un telefono valido escriba 9 cifras');
     evento.preventDefault();//previene que se ejecute el submit, sino has selecionado ninguna opcion.
     campoTelefono.focus();
   
     
 }else if(momentoLLamada.length==0){
     msjServicios.style.display="block";
     //alert('¿A que hora del día prefiere que le llamemos?');
     evento.preventDefault();//no dejo enviar el formulario
     cajaServicios.focus();
 
 }else if(areaTematica.selectedIndex==0){//si el valor es comillas que es la opcion de cortesia podiamos evaluar si un select esta vacio,  los demas tienen valores 1,2,3,4
     msjTematica.style.display="block";
       //alert('debes elegir un area tematica de consulta');
       evento.preventDefault();//no dejo enviar el formulario
       areaTematica.focus();
 
 }else if(campoGuias.length<2 || campoGuias.length>2){
     alert(campoGuias.length);
     msjGuias.style.display="block";
     //alert('debes elegir 2 guias obligatoriamente')
     evento.preventDefault();//previene que se ejecute el submit, sino has selecionado ninguna opcion.
     cajaGuias.focus();//marca el foco sino has seleccionado ninguna opcion
 
 }else if(valorComentario.length==0 || /^\s+$/.test(valorComentario)){//este patrón te cuenta espacio vacios no puede haber 100 espacios vacios
  // else if(valorComentario.length==0 || patronVacio.test(valorComentario)){
     msjComentarios.style.display="block";
     //alert('debes escribir un comentario');
     evento.preventDefault();
     campoComentarios.focus();
     
 }else if(valorComentario.length>100){
     //alert('debes escribir un maximo de 100 caracteres');
     msjComentarios.style.display="block";
     evento.preventDefault();
     campoComentarios.focus();
 
 }else if(campoClausulas.length==0){
     msjClausulas.style.display="block";
     //alert('debes aceptar las clausulas');
     evento.preventDefault();//no dejo enviar el formulario
     cajaClausulas.focus();  
 } 
 }
    // var caracteresQuedan;
 //Función contar caracteres
 function contarCaracteres(){
 
   valorComentario=campoComentarios.value;//obtener ese dato de ese campo
   caracteresQuedan = 1000 - valorComentario.length;
 
 if(caracteresQuedan>0){
     cajaRecuento.innerHTML=`Quedan al menos  ${caracteresQuedan} caracteres por escribir`;
 }else{
     cajaRecuento.innerHTML=`Has escrito lo suficiente`;
 }
 
 }  
 //evento enviar formulario
 miformulario.addEventListener('submit', validarFormulario);
 
   //evento recuento
 campoComentarios.addEventListener('input', contarCaracteres);
   
   
  
  