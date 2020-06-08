know = {
    "hola" : "Buenas Tardes",
    "como estas?" : "Muy bien y tú?",
    "ok" : ":C",
    "bien, gracias" : "Me alegro, que tengas un buen día"
};
function chatbot_talk() {
    var user = document.getElementById("userBox").value.trim(" ");
    console.log(user.length)
    if (user == "") {return};

    var respuesta = "";
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += '<div class="outgoing-chats">' +
                                                        '<div class="outgoing-msg">' + 
                                                            '<p>' + user + '</p>' +
                                                        '</div>' +
                                                    '</div>'
    if (user in know) {
        respuesta = know[user];
    } else {
        respuesta = "No entiendo lo que me acabas de decir";
    }
    document.getElementById("chatLog").innerHTML += '<div class="received-chats">' +
                                                        '<div class="received-msg">' +
                                                            '<div class="received-msg-inbox">' +
                                                                '<p>' + respuesta + '</p>' +
                                                            '</div>' +
                                                        '</div>' +
                                                    '</div>'
}

function chatbot_cerrar(id) {
    document.getElementById(id).style.visibility = 'hidden'
    
}

function chatbot_abrir(id) {
    document.getElementById(id).style.visibility = 'visible'
}

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
        chatbot_limpiar_chat();
    }
}

function chatbot_limpiar_chat() {
    document.getElementById('chatLog').innerHTML = '';
}