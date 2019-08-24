
    //botones redirección cifrar y descifrar desde el home

    document.getElementById('cifrar1').addEventListener('click', () => {
        let cifrarmensaje = document.getElementById('cifradoscreen');
        cifrarmensaje.style.display = 'block';
    
        let ocultarhome1 = document.getElementById('homescreen');
        ocultarhome1.style.display = 'none';
    
    });
    
    document.getElementById('descifrar1').addEventListener('click', () => {
        let descifrarmensaje = document.getElementById('descifradoscreen');
        descifrarmensaje.style.display = 'block';
    
        let ocultarhome2 = document.getElementById('homescreen');
        ocultarhome2.style.display = 'none';
    
    });
    
    
    
    //botones 'volver' desde pantallas cifrado/descifrado
    
    document.getElementById('volver1').addEventListener("click", () => {
        location.reload(true);
       });   
    
    document.getElementById('volver2').addEventListener("click", () => {
        location.reload(true);
       });    
    
    
    //Acción boton reset
    
    document.getElementById('clean1').addEventListener("click", () => {
        document.getElementById('texto1').value = "";
        document.getElementById('offset1').value = "";
    });
    
    document.getElementById('clean2').addEventListener("click", () => {
        document.getElementById('texto2').value = "";
        document.getElementById('offset2').value = "";
    });
    
    
    
    //Acción CIFRADO   //rescatando el valor del texto a codificar
    
    document.getElementById('botoncifrar').addEventListener("click", () => {
        let textoEncode = document.getElementById('texto1').value;
        let numeroOffset1 = document.getElementById('offset1').value;
        document.getElementById('msj-cifrado-check').innerHTML = window.cipher.encode(textoEncode, numeroOffset1);
    });
    
    
    
    //Acción DESCIFRADO   //rescatando el valor del texto a decodificar
    
      document.getElementById('botondescifrar').addEventListener("click", () => {
        let textoDecode = document.getElementById('texto2').value;
        let numeroOffset2 = document.getElementById('offset2').value;
        document.getElementById('msj-descifrado-check').innerHTML = window.cipher.decode(textoDecode, numeroOffset2);
    });
    
      
    
    
    
    