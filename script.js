//const texto = document.getElementById("texto").value;
//let mensaje = document.getElementById("mensaje mostrado").value;
//mensaje.innerText=texto;

    //diccionario con letas a remplazar
 let diccionario = {
    "e":"enter", 
    "i":"imes",
     "a":"ai",
     "o":"ober",
     "u":"uaft" 
    }
    //console.log(diccionario)
    const mensaje = document.querySelector("mensaje");


function encriptar(){                                             //funcion que encripta el texto
    const texto_escrito = document.getElementById("texto").value; // almacena el texto escrito
    if(texto_escrito===""){                                      //verifica si hay texto escrito para encriptar
        alert("debes escribir un texto");
        

    }else if(/[^a-z\s]/.test(texto_escrito)){                    //verifica si existen caracteres o mayusculas en el texto
        alert("el texto no debe contener mayusculas o caacteres especiales")
        limpiarcaja();

        return;
    }
        //aqui se encritara el texto escrito
    let texto_encriptado = texto_escrito
        
        texto_encriptado=texto_encriptado.replace(/e/g,"enter"); //remplaza la letra e por enter
        texto_encriptado=texto_encriptado.replace(/i/g,"imes"); //remplaza la letra i por imes
        texto_encriptado=texto_encriptado.replace(/a/g,"ai");   //remplaza la letra a por ai
        texto_encriptado=texto_encriptado.replace(/o/g,"ober"); //remplaza la letra o por ober
        texto_encriptado=texto_encriptado.replace(/u/g,"ufat"); //remplaza la letra u por uaft
       
  

        //toma el texto escrito en el textarea 1 y lo muestra en el textarea 2  ya encriptado
        document.getElementById("mensaje_resultado").value=texto_encriptado;
    
}

function desencriptar(){
    //alert("creaste la funcion desencriptar");

    const texto_escrito = document.getElementById("texto").value; // almacena el texto escrito
    if(texto_escrito===""){                                      //verifica si hay texto escrito para encriptar
        alert("debes escribir un texto");
        
    }
    else if(/[^a-z\s]/.test(texto_escrito)){                    //verifica si existen caracteres o mayusculas en el texto
        alert("el texto no debe contener mayusculas o caacteres especiales"); //muestra una alerta si hay caracteres o mayusculas en el texto
        limpiarcaja();

        return;
    }

        //aqui se desencriptara el texto encriptado
    let texto_desencriptado = texto_escrito
        
        texto_desencriptado=texto_desencriptado.replace(/enter/g,"e"); //remplaza la letra e por enter
        texto_desencriptado=texto_desencriptado.replace(/imes/g,"i"); //remplaza la letra i por imes
        texto_desencriptado=texto_desencriptado.replace(/ai/g,"a");   //remplaza la letra a por ai
        texto_desencriptado=texto_desencriptado.replace(/ober/g,"o"); //remplaza la letra o por ober
        texto_desencriptado=texto_desencriptado.replace(/ufat/g,"u"); //remplaza la letra u por uaft
       
  

        //toma el texto escrito en el textarea 1 encriptado y lo muestra en el textarea 2  ya desencriptado
    document.getElementById("mensaje_resultado").value=texto_desencriptado;
}

function copiar(){
    let copiartext = document.getElementById("mensaje_resultado").value;
        navigator.clipboard.writeText(copiartext).then(() => { //Intenta copiar el texto al portapapeles
            alert("Texto copiado al portapapeles.");          //.then si tiene exito mostrara una alerta 
            limpiarcaja();

        }).catch(err => {                                      //Si no mostrara un error en consola
            console.error("Error al copiar el texto: ", err);
        });

}

function limpiarcaja(){               
   document.getElementById("texto").value = "";
   //document.getElementById("mensaje_resultado").value=""
}
