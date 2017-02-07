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
      <input type="text" size="20" data-stripe="number">
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Expiration (MM/YY)</span>
      <input type="text" size="2" data-stripe="exp_month">
    </label>
    <span> / </span>
    <input type="text" size="2" data-stripe="exp_year">
  </div>

  <div class="form-row">
    <label>
      <span>CVC</span>
      <input type="text" size="4" data-stripe="cvc">
    </label>
  </div>

  <div class="form-row">
    <label>
      <span>Billing Postal Code</span>
      <input type="text" size="6" data-stripe="address_zip">
    </label>
  </div>

  <div class="form-row">
    <label>
      <input type="hidden" size="6" name="total" value=<?php echo $total?>>
    </label>
  </div>

  <input type="submit" class="submit" value="Submit Payment">
</form>
<br>
<a href="https://stripe.com/docs/testing">Available Stripe Test Card Numbers</a>
</br>
<ul>
  <li>4242424242424242  Visa</li> </br>
  <li>4000056655665556  Visa (debit)</li></br>
  <li>5555555555554444  Mastercard</li></br>
  <li>5200828282828210  Mastercard (debit)</li></br>
  <li>5105105105105100  Mastercard (prepaid)</li></br>
  <li>378282246310005   American Express</li></br>
  <li>371449635398431   American Express</li></br>
  <li>6011111111111117  Discover</li></br>
  <li>6011000990139424  Discover</li></br>
  <li>30569309025904    Diners Club</li></br>
  <li>38520000023237    Diners Club</li></br>
  <li>3530111333300000  JCB</li></br>
  <li>3566002020360505  JCB</li></br>
  <li>4242424242424242  Visa</li></br>
  <li>4242424242424242  Visa</li></br>
</ul>

</body>
</html>