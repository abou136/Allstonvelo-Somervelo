<?php
$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];
$username = $_POST['username'];
$math = $_POST['math'];

if($username) {	die(); 
  } else if ($math != '11'){ die(); 
  } else if ($_SERVER['REQUEST_METHOD'] != "POST"){ die(); 
  } else {


/*// CHECK FOR A VALID EMAIL ADDRESS
function is_valid_email($email) {
	return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $email);
}	
if (!is_valid_email($email)) {
	$message = 'invalid email address.';
	include("contactreturn.php"); die();
}

// BLOCK KNOWN SPAMMERS
if (preg_match("#(?:watchesforsale.org.uk)$#i",$email)) { $message = "Blocked"; include("contactreturn.php"); die(); }
if (preg_match("#(?:rosechina.com)$#i",$email)) { $message = "Blocked"; include("contactreturn.php"); die(); }
if (preg_match("#(?:\.ru)$#i",$email)) { $message = "Blocked"; include("contactreturn.php"); die(); }
if (preg_match("#(?:\.ro)$#i",$email)) { $message = "Blocked"; include("contactreturn.php"); die(); }
if (preg_match("#(?:\.pl)$#i",$email)) { $message = "Blocked"; include("contactreturn.php"); die(); }
*/

// OK SEND THE EMAIL
define('TO', 'info@somervelo.com');
$referer=trim($_SERVER['HTTP_REFERER']);
header('Content-Type: text/html; charset=utf-8');
header("Location: $referer");

define('SUBJECT', 'Somervelo Contact Form!');
function sendEmail($to, $from, $subj, $body)
{
	$date = date( 'r' );
	$phpversion = phpversion();
	$boundary = md5( time() );
	$headers = "From: $from\n"."Date: $date\n"."Content-Type: text/html; charset=\"UTF-8\"\n";
	mail(trim($to), trim($subj), $body, $headers );
}
sendEmail(TO, trim($_POST['email']), SUBJECT,
'Name: '.$name.
'<br>Email: '.$email.
'<br>Subject: '.$subject.
'<br><br>Message:<br>'.$message);
}
?>