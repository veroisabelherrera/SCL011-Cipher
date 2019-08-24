window.cipher = {
  
  encode: (string, offset) => {
   //mensaje recibido (declaración de string vacio para que se concatene cada caracter en cada iteración)
   let msjCifrado = "";

   //inicio ciclo recorrido
   for (let i = 0; i < string.length; i++) {
       let caracteresC = string[i];
   //identificacion de espacios vacios
       if (caracteresC.match(/[a-z]/i)) {
           if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
               let textoCharC = (string.charCodeAt(i) - 65 + parseInt(offset)) % 26 + 65;
               msjCifrado += String.fromCharCode(textoCharC);
   //para minusculas             
           } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
              let textoCharC = (string.charCodeAt(i) - 97 + parseInt(offset)) % 26 + 97;
               msjCifrado += String.fromCharCode(textoCharC);
           }
   //concatenando resultado         
       } else {
           msjCifrado += caracteresC;
       }
   }
   //retornar respuesta
   return msjCifrado;
},
    

  decode: (string, offset) => {
    //mensaje recibido
    let msjDescifrado = "";

    //inicio ciclo recorrido
    for (let i = 0; i < string.length; i++) {
        let caracteresD = string[i];
        //identificacion de espacios vacios
        if (caracteresD.match(/[a-z]/i)) {
            if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
                let textoCharD = (string.charCodeAt(i) + 65 - parseInt(offset)) % 26 + 65;
                msjDescifrado += String.fromCharCode(textoCharD);
        //para minusculas         
            } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
                let textoCharD = ((string.charCodeAt(i) - 97 - parseInt(offset) + 52) % 26) + 97;
                msjDescifrado += String.fromCharCode(textoCharD);
            }
        //concatenando resultado 
        } else {
            msjDescifrado += caracteresD;
        }
    }
    //retornar respuesta
    return msjDescifrado;
}
};
