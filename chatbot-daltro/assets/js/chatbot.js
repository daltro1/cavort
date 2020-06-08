know = {
    "hola" : "Buenas Tardes",
    "como estas?" : "Muy bien y tú?",
    "ok" : "xd",
    "bien, gracias" : "Me alegro, que tengas un buen día"
};
function talk() {
    var user = document.getElementById("userBox").value;
    var respuesta = "";
    document.getElementById("userBox").value = "";
    document.getElementById("chatLog").innerHTML += '<div class="outgoing-chats">' +
                                                        '<div class="outgoing-msg">' + 
                                                            '<p>' + user + '</p>' +
                                                            '<span class="time">02:00 PM | Junio 07</span>' +
                                                        '</div>' +
                                                        '<div class="outgoing-chats-img">' +
                                                            '<img src="assets/img/pipe.png">' +
                                                        '</div>' +
                                                    '</div>'
    if (user in know) {
        respuesta = know[user];
    } else {
        respuesta = "No entiendo lo que me acabas de decir";
    }
    document.getElementById("chatLog").innerHTML += '<div class="received-chats">' +
                                                        '<div class="received-chats-img">' +
                                                            '<img src="assets/img/pipe.png">' +
                                                        '</div>' +
                                                        '<div class="received-msg">' +
                                                            '<div class="received-msg-inbox">' +
                                                                '<p>' + respuesta + '</p>' +
                                                                '<span class="time">02:00 PM | Junio 07</span>' +
                                                            '</div>' +
                                                        '</div>' +
                                                    '</div>'
}

function cerrar(id) {
    document.getElementById(id).style.display = 'none'
    
}

function abrir(id) {
    document.getElementById(id).style.display = 'block'
}

function toggle_chat(valor) {
    if (valor == 1) {
        cerrar('chat-inactivo');
        abrir('ventana-chat');
        abrir('chat-activo');
    }
    else {
        abrir('chat-inactivo');
        cerrar('chat-activo');
        cerrar('ventana-chat');
        limpiar_chat();
    }
}

function limpiar_chat() {
    document.getElementById('chatLog').innerHTML = '';
}