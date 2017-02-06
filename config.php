<?php
require_once('vendor/autoload.php');

$stripe = array(
  "secret_key"      => "sk_test_3BK8aL9hi5qaLUsL7sZ0oITy",
  "publishable_key" => "pk_test_WVr4zCSUPcYE2ZLAXJYlqp3D"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>