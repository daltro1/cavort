<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "El nombre es requerido ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "El email es requerido ";
} else {
    $email = $_POST["email"];
}

// Phone Number
if (empty($_POST["phone_number"])) {
    $errorMSG .= "El número de teléfono es requerido ";
} else {
    $phone_number = $_POST["phone_number"];
}

// Rut
if (empty($_POST["rut"])) {
    $errorMSG .= "El rut es requerido ";
} else {
    $rut = $_POST["rut"];
}

// Fecha de nacimiento
if (empty($_POST["fecha_nacimiento"])) {
    $errorMSG .= "La fecha de nacimiento es requerida ";
} else {
    $fecha_nacimiento = $_POST["fecha_nacimiento"];
}

// Empresa
if (empty($_POST["empresa"])) {
    $empresa = "Indefinida";
} else {
    $empresa = $_POST["empresa"];
}


// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "El mensaje es requerido ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "bstnbas3@gmail.com";

$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Nombre y Apllido: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Teléfono: ";
$Body .= $phone_number;
$Body .= "\n";
$Body .= "Rut: ";
$Body .= $rut;
$Body .= "\n";
$Body .= "Fecha de nacimiento: ";
$Body .= $fecha_nacimiento;
$Body .= "\n";
$Body .= "Empresa: ";
$Body .= $empresa;
$Body .= "\n";
$Body .= "Mensaje: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Algo salió mal";
    } else {
        echo $errorMSG;
    }
}

?>