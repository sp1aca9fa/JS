<?php
  $name = $_POST['name'];
  $message = $_POST['message'];
?>
<?php
	$email_from = 'yourname@yourwebsite.com';
	$email_subject = "New Form submission";
	$email_body = "Message received from $name.\n\n".
                            "$message".
?>
