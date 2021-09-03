<?php
    $name = $_POST['name'];
    $email= $_POST['email'];
    $subject= $_POST['subject'];
    $text= $_POST['message'];

    $to = 'wegis.h.silveira@gmail.com';
    $from = 'portfoliocontact@wegis.com.br';
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    // Create email headers
    $headers .= 'From: '.$from."\r\n".
        'Reply-To: '.$email."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    // Compose a simple HTML email message
    $message = '<html><body>';
    $message .= '<h2 style="color:red;">Assunto: '.$subject.'</h2>';
    $message .= '<p style="color:#000;font-size:14px;">'.$text.'</p>' . "\r\n";
    $message .= '<p style="color:#000;font-size:14px;">Nome: '.$name.'</p>' . "\r\n";
    $message .= '<p style="color:#000;font-size:14px;">E-mail: '.$email.'</p>';
    $message .= '</body></html>';
    
    // Sending email
    if($email!=NULL){
        if(mail($to, $subject, $message, $headers)){
            // echo 'Your mail has been sent successfully.';
            header("Location: message-success.html");
        } else{
            // echo 'Unable to send email. Please try again.';
            header("Location: message-fail.html");
        }
    }

    // header("Location: index.html");
?>