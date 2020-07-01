
/* Área Equipo */
function estado_animaciones (valor) {
    if (valor == 0) {
        document.getElementById("frame-doctores").style.animationPlayState = "paused";
        document.getElementById("doc-1").style.animationPlayState = "paused";
        document.getElementById("doc-2").style.animationPlayState = "paused";
        document.getElementById("doc-3").style.animationPlayState = "paused";
        document.getElementById("doc-4").style.animationPlayState = "paused";
        document.getElementById("doc-5").style.animationPlayState = "paused";
        document.getElementById("doc-6").style.animationPlayState = "paused";
    }
    else {
        document.getElementById("frame-doctores").style.animationPlayState = "running";
        document.getElementById("doc-1").style.animationPlayState = "running";
        document.getElementById("doc-2").style.animationPlayState = "running";
        document.getElementById("doc-3").style.animationPlayState = "running";
        document.getElementById("doc-4").style.animationPlayState = "running";
        document.getElementById("doc-5").style.animationPlayState = "running";
        document.getElementById("doc-6").style.animationPlayState = "running";
    }
}


/* Área Pacientes */
$('#testimonio-1').on('hidden.bs.modal', function (event) {
document.getElementById("video-testimonio-1").pause();
document.getElementById("video-testimonio-1").currentTime = 0;
})
$('#testimonio-1').on('shown.bs.modal', function (event) {
    var button = $(event.relatedTarget)
    var recipient = button.data("source")
    var modal = $(this)
    document.getElementById('video-testimonio-1').src = recipient
    console.log(recipient)
    document.getElementById("video-testimonio-1").play()
})

/* Animaciones */
function cubica_Bezier(p0, p1, p2, p3, t) {
    return p0*(1 - t)**3 + 3*p1*t*(1 - t)**2 + 3*p2*(t**2)*(1 - t) + p3*(t**3)*(1-t)
}

/* Footer */
$(document).ready(function (){
    $.ajax({
        url: "footer.html",
        dataType: "html",
        success: function(data){
            document.getElementById("footer-script").innerHTML = data;
        }
    })
});