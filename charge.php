<?php
  require_once('./config.php');

  $token  = $_POST['stripeToken'];
  $total = $_POST['total'];

  // $customer = \Stripe\Customer::create(array(
  //     'email' => 'customer@example.com',
  //     'source'  => $token
  // ));

  $charge = \Stripe\Charge::create(array(
      'source'     => $_POST['stripeToken'],
      // 'customer' => $customer->id,
      'amount'   => $total,
      'currency' => 'usd'
  ));

  $paidAmount = $total/100;
  
  echo '<h1>Thank you! You have successfully paid $'. $paidAmount . '!</h1>';
  echo '<a href="index.html"> More fun stuffs?</a>';
  
?>