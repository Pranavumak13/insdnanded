<?php
// send-email.php

// Retrieve form data from the request body
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$phone = $data['phone']
$email = $data['email'];
$choice = $data['choice'];

// Set up email parameters
$to = 'gadewarjanhvi15@gmail.com';
$subject = 'Website Form Submission';
$message = "Name: $name\nPhone: $phone\nEmail: $email\nChoice: $choice";
$headers = 'From: your-website@example.com' . "\r\n" .
    'Reply-To: ' . $email . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

// Send the email
$result = mail($to, $subject, $message, $headers);

if ($result) {
  http_response_code(200); // Set HTTP response code to 200 for success
  echo 'Email sent successfully';
} else {
  http_response_code(500); // Set HTTP response code to 500 for server error
  echo 'Error sending email';
}
?>
