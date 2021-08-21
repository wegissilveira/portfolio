<?php
    $name = $_POST['name'];
    $email= $_POST['email'];
    $phone= $_POST['phone'];
    $message= $_POST['message'];

    $to = "wegis.h.silveira@gmail.com";

    $subject = "Mail From portfolio";

    // $txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Message =" . $message;
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $message = '<html><body>';
    $message .= '<h1>Hello, World!</h1>';
    $message .= '</body></html>';

    $headers = "From: portfoliocontact@wegis.com.br";

    if($email!=NULL){
        mail($to,$subject,$message,$headers);
    }

    header("Location: index.html");
?>

<!--USAR ESSE CÓDIGO COMO REFERêNCIA DA MENSAGEM-->
<?php
    $to = 'wegis.h.silveira@gmail.com';
    $subject = 'Marriage Proposal';
    $from = 'portfoliocontact@wegis.com.br';
    
    // To send HTML mail, the Content-type header must be set
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    
    // Create email headers
    $headers .= 'From: '.$from."\r\n".
        'Reply-To: '.$from."\r\n" .
        'X-Mailer: PHP/' . phpversion();
    
    // Compose a simple HTML email message
    $message = '<html><body>';
    $message .= '<h1 style="color:#f40;">Hi Jane!</h1>';
    $message .= '<p style="color:#080;font-size:18px;">Will you marry me?</p>';
    $message .= '</body></html>';
    
    // Sending email
    if($email!=NULL){
        if(mail($to, $subject, $message, $headers)){
            echo 'Your mail has been sent successfully.';
        } else{
            echo 'Unable to send email. Please try again.';
        }
    }

    header("Location: index.html");
?>