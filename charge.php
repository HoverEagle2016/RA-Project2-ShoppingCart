<link rel="stylesheet" type="text/css" href="build/app.css">
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
  
echo '<div class="thank-you">
        <img src="https://img.clipartfest.com/8589836634e9548a80f3b2245a359eba_check-mark-symbol-powerpoint-powerpoint-clipart-check-mark_297-300.png">
        <h1>Thank you for your payment! You have paid $'. $paidAmount . '!</h1>
        <a href="index.html"> More fun stuffs?</a>
      </div>';  
?>

