<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require './php-mailer/autoload.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

$name = $_POST['user-name'];
$phone = $_POST['user-phone'];

$login = 'apsky-test';
$password = 'test1234';

try {
    //Server settings
//    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.yandex.ru';                       // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = $login;                                 // SMTP username
    $mail->Password   = $password;                              // SMTP password
    $mail->SMTPSecure = 'ssl';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                     // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('apsky-test@yandex.ru');
    $mail->addAddress('ap.sky@yandex.ru');     // Add a recipient
//    $mail->addAddress('ellen@example.com');                     // Name is optional
//    $mail->addReplyTo('info@example.com', 'Information');
//    $mail->addCC('cc@example.com');
//    $mail->addBCC('bcc@example.com');

    // Attachments
//    $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//    $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Заявка на звонок с сайта portfolio';
    $mail->Body    = '' .$name .' оставил заявку, его телефон: '. $phone;
    $mail->AltBody = '';

    $mail->send();

    //проверка отправки (ответ сервера в форму success)
//    $result = array(
//    'user-name' => $name,
//    'user-phone' => $phone
//    );
//
//    // Переводим массив в JSON и отправляем в response
//    echo json_encode($result);

} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}