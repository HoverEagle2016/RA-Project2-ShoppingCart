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

  echo '<h1>Successfully charged $'. $total . '!</h1>';
  echo '<a href="index.html"> Go back to home page.</a>'
?>