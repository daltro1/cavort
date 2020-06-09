const container = document.getElementById("chatLog"); /* Ventana del chat que contiene los mensajes */

var flujo_normal = true; /* variable que determina si se está en un flujo normal de chat, o en un flujo con respuertas abiertas*/
var loading = 0; /* variable que guarda cantidad de mensajes que se han respondido de los enviados */
var delay_loading = 300; /* delay en tiempo desde que el bot recibe un mensaje hasta que muestra el loading gif */
const loading_msg = '<div id="loading" class="received-chats">'+
                        '<div class="received-msg">' +
                            '<div class="received-msg-inbox">' +
                                '<p><img src="chatbot-daltro/assets/gif/loadingdots.gif"></p>' +
                            '</div>' +
                        '</div>' +
                    '</div>';

/* chatbot_input
- Se encarga de recibir un string, analizar si fue producto de un mensaje
  o de un botón en el chat, seguir el flujo de chat correspondiente
*/
function chatbot_main(input) {

    respuesta = mejor_coincidencia(input);

    chatbot_output(respuesta["respuesta"], respuesta["tiempo_espera"]);
}

/* chatbot_input
- Se encarga de recibir un mensaje, verificar que no sea vacío, 
  manejar el loading gif correctamente,
  enviar el mensaje a la función main y al template como mensaje del ser humano
*/
function chatbot_input(user= null) {
    if (user==null) {user = document.getElementById("userBox").value.trim(" ")}
    else {};

    if (user == "") {return};

    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += '<div class="outgoing-chats">' +
                                                        '<div class="outgoing-msg">' + 
                                                            '<p>' + user + '</p>' +
                                                        '</div>' +
                                                    '</div>';
    container.scrollTop = container.scrollHeight;

    chatbot_main(user);


    if (loading > 0) {container.removeChild(document.getElementById("loading"))};
    if (loading > 0) {delay = 0};
    if (loading == 0) {delay = delay_loading}
    setTimeout(function() {container.innerHTML += loading_msg; container.scrollTop = container.scrollHeight} , delay);
    loading += 1;
}

/* chatbot_output
- Se encarga de recibir una respuesta, manejar el tiempo de espera, 
  manejar el loading gif correctamente y 
  enviar la respuesta al template como mensaje del bot
*/
function chatbot_output(mensaje, tiempo_espera) {
    setTimeout(function() {
        loading -= 1;
        document.getElementById("chatLog").innerHTML +=     '<div class="received-chats">' +
                                                                '<div class="received-msg">' +
                                                                    '<div class="received-msg-inbox">' +
                                                                        '<p>' + mensaje + '</p>' +
                                                                    '</div>' +
                                                                '</div>' +
                                                            '</div>';
        container.removeChild(document.getElementById("loading"));
        if (loading > 0) {container.innerHTML += loading_msg}
        container.scrollTop = container.scrollHeight;
                                
        }, tiempo_espera);
    }

/* chatbot_cerrar
- Dada una id, se encarga de "cerrar" el elemento con esa id
*/
function chatbot_cerrar(id) {
    document.getElementById(id).style.visibility = 'hidden'
    
}

/* chatbot_abrir
- Dada una id, se encarga de "abrir" el elemento con esa id
*/
function chatbot_abrir(id) {
    document.getElementById(id).style.visibility = 'visible'
}

/* chatbot_toggle_chat
- Se encarga de abrir y cerrar todo el chatbot
*/
function chatbot_toggle_chat(valor) {
    if (valor == 1) {
        chatbot_cerrar('chat-inactivo');
        chatbot_abrir('ventana-chat');
        chatbot_abrir('chat-activo');
    }
    else {
        chatbot_abrir('chat-inactivo');
        chatbot_cerrar('chat-activo');
        chatbot_cerrar('ventana-chat');
    }
}

/* chatbot_limpiar_chat
- Se encarga de borrar todos los mensajes de
  la ventana de chat
*/
function chatbot_limpiar_chat() {
    document.getElementById('chatLog').innerHTML = '';
}
/* OTRO ARCHIVO A CREAR */
respuestas = {
    "no entiendo": {
        "id": -1,
        "respuesta" : "No entiendo lo que acabas de decir",
        "palabras_clave" : [],
        "tiempo_espera" : 2000,
    },
    "saludo" : {
        "id": 0,
        "respuesta" : "Hola, buenas tardes",
        "palabras_clave": ["hola","buenas"],
        "tiempo_espera" : 2000,
    },
    "pregunta": {
        "id" : 1,
        "respuesta" : "No lo sé, tú dime",
        "palabras_clave" : ["que", "nada"],
        "tiempo_espera" : 2000,
    }
}
function mejor_coincidencia(pregunta) {
    pregunta = pregunta.toLowerCase()
    palabras = pregunta.replace(/[,\.?]/g," ").split(" ").filter(function (c) {return c != ""});
    respuesta_mayor = respuestas["no entiendo"]
    suma_mayor = 0
    for (llave in respuestas) {
        respuesta = respuestas[llave]
        suma = 0
        claves = respuesta["palabras_clave"]
        console.log(claves)
        for (i in claves) {
            clave = claves[i]
            if (palabras.includes(clave)) {
                suma += 1
            }
        }
        console.log(suma)
        if (suma > suma_mayor) {
            respuesta_mayor = respuesta
            suma_mayor = suma
        }
    }
    return respuesta_mayor
    
}