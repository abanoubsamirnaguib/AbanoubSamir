<?php
<<<<<<< HEAD
if(isset($_POST['email'])) {
 
//   // EDIT THE 2 LINES BELOW AS REQUIRED 
    $email_to = "abanoubsamir@gmail.com";
    $email_subject = "Email From Portfolio";
 
function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['name']) ||
        
        !isset($_POST['email']) ||
        !isset($_POST['phone']) ||
        !isset($_POST['address']) ||
        !isset($_POST['note'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['name']; // required
    
    $email_from = $_POST['email']; // required
    $telephone = $_POST['phone']; // not required
    $address = $_POST['address']; // not required
    $comments = $_POST['note']; // required
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
//   if(!preg_match($string_exp,$last_name)) {
//     $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
//   }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
 
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "address: ".clean_string($address)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!-- include your own success html here -->
 
Thank you for contacting us. We will be in touch with you very soon.
 
<?php
header("location:index.html");
=======
echo"hello ,";     
        if(isset($_POST['email'])) {
        $email_to = "abanoubsamir@gmail.com";
        $email_subject = "Email From Portfolio";

        function died($error) {
        echo ("We are very sorry, but there were error(s) found with the form you submitted. ");
        echo ("These errors appear below.<br /><br />");
        echo ($error."<br /><br />");
        echo ("Please go back and fix these errors.<br /><br />");
        die();
        }

        if(empty($_POST['name']) ||
        empty($_POST['email']) ||
        empty($_POST['phone']) ||
        empty($_POST['address']) || 
        empty($_POST['note']) )  {
        died('We are sorry, but there appears to be a problem with the form you submitted.');
        }

        $first_name = $_POST['name']; // required
        $email_from = $_POST['email']; // required
        $telephone = $_POST['phone']; // not required
        $address = $_POST['address']; // not required
        $comments = $_POST['note']; // required

        $error_message = "";
        $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';

        if(!preg_match($email_exp,$email_from) ) {
        $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
        }
        $string_exp = "/^[A-Za-z .'-]+$/";

        if(!preg_match($string_exp,$first_name)) {
        $error_message .= 'The First Name you entered does not appear to be valid.<br />';
        }

        if (  strlen($comments)< 2 ) {
        $error_message .= 'The Comments you entered do not appear to be valid.<br />';
        }

        if(strlen($error_message) > 5) {
        died($error_message);
        } else echo "Thank you for contacting us. We will be in touch with you very soon.";

        $email_message = "Form details below.\n\n";

        function clean_string($string) {
        $bad = array("content-type","bcc:","to:","cc:","href");
        return str_replace($bad,"",$string);
        }
        $email_message .= "First Name: ".clean_string($first_name)."\n";
        $email_message .= "Email: ".clean_string($email_from)."\n";
        $email_message .= "Telephone: ".clean_string($telephone)."\n";
        $email_message .= "address: ".clean_string($address)."\n";
        $email_message .= "Comments: ".clean_string($comments)."\n";
        $headers='From: '.$email_from."\r\n".
        'Reply-To: '.$email_from."\r\n".
        'X-Mailer: PHP/' . phpversion();
        if( (@mail($email_to, $email_subject, $email_message, $headers)) ){
            echo ('Thank you for contacting us. We will be in touch with you very soon.');
        }
        // <!-- include your own success html here -->
             
>>>>>>> b3fd25aa475210e9645cae3b90e396294f48f236
}
?>