<?php

$total = round($_POST['total']);

?>

<!DOCTYPE html>

<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script type="text/javascript" src="https://js.stripe.com/v2/"></script>
  <script type="text/javascript" src="checkout.js"></script>
  <link rel="stylesheet" type="text/css" href="build/app.css">
  <title></title>
</head>

  <body class="chargePage">
    <p>Tips: The website is currenlty only working under Strip Test Mode. <br>
    <a href="https://stripe.com/docs/testing">Available Stripe Test Card Numbers</a>
    </p>
    <form action="charge.php" method="POST" id="payment-form">
      <span class="payment-errors"></span>

      <div class="form-row">
        <label>
          <span>Card Number</span>
          <input placeholder="Card Number" type="text" size="20" data-stripe="number">
        </label>
      </div>

      <div class="form-row">
        <label>
          <span>Expiration (MM/YY)</span>
          <div class="expiration">
            <input id="column-left" placeholder="MM" type="text" size="2" data-stripe="exp_month">
            <input id="column-right" placeholder="YY" type="text" size="2" data-stripe="exp_year">
          </div>
        </label>
      </div>

      <div class="form-row">
        <label>
          <span>CVC</span>
          <input placeholder="CVC" type="text" size="4" data-stripe="cvc">
        </label>
      </div>

      <div class="form-row">
        <label>
          <span>Billing Postal Code</span>
          <input type="text" size="6" data-stripe="address_zip" placeholder="Postal Code">
        </label>
      </div>

      <div class="form-row">
        <label>
          <input type="hidden" size="6" name="total" value=<?php echo $total?>>
        </label>
      </div>

      <input id="checkoutSubmit" type="submit" class="submit" value="Submit Payment">
    </form>
  <br>
  
  </br>

  </body>

</html>