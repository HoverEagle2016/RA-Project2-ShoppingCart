<?php

$total = $_POST['total'];

?>

<!DOCTYPE html>

<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
  <script type="text/javascript" src="checkout.js"></script>

  <title></title>
</head>
<body>
  <form action="charge.php" method="POST" id="payment-form">
  <span class="payment-errors"></span>

  <div class="form-row">
    <label>
      <span>Card Number</span>
      <input value="4242424242424242" type="text" size="20" data-stripe="number">
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Expiration (MM/YY)</span>
      <input value="12" type="text" size="2" data-stripe="exp_month">
    </label>
    <span> / </span>
    <input value="20" type="text" size="2" data-stripe="exp_year">
  </div>

  <div class="form-row">
    <label>
      <span>CVC</span>
      <input value="242" type="text" size="4" data-stripe="cvc">
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Billing Postal Code</span>
      <input value="12332" type="text" size="6" data-stripe="address_zip">
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Total:</span>
      <!-- <P value=><?php echo $total?> </P> -->
      <input type="text" size="6" name="total" value=<?php echo $total?>>
    </label>
  </div>

  <input type="submit" class="submit" value="Submit Payment">
</form>
</body>
</html>