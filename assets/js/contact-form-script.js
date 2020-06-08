/*==============================================================*/
// Raque Contact Form  JS
/*==============================================================*/
(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formError();      
            submitMSG(false, "Existen errores en algunos campos");
        } else {
            // everything looks good!
            event.preventDefault();
            submitForm();
        }
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#nombre").val();
        var email = $("#email").val();
        var phone_number = $("#telefono").val();
        var rut = $("#rut").val();
        var fecha_nacimiento = $("#fecha_nacimiento").val();
        var empresa = $("#empresa").val();
        var message = $("#mensaje").val();


        $.ajax({
            type: "POST",
            url: "assets/php/form-process.php",
            data: "name=" + name + "&email=" + email + "&phone_number=" + phone_number + "&rut=" + rut + "&fecha_nacimiento" + fecha_nacimiento + "&empresa" + empresa +"&message=" + message,
            success : function(text){
                if (text == "success"){
                    formSuccess();
                } else {
                    formError();
                    submitMSG(false,text);
                }
            }
        });
    }

    function formSuccess(){
        $("#contactForm")[0].reset();
        submitMSG(true, "Message Submitted!")
    }

    function formError(){
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $(this).removeClass();
        });
    }

    function submitMSG(valid, msg){
        if(valid){
            var msgClasses = "h4 tada animated text-success";
        } else {
            var msgClasses = "h4 text-danger";
        }
        $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
    }
}(jQuery)); // End of use strict