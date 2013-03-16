<!DOCTYPE html>
<html>
	<head>
		<title></title>
		<link href="styls.css" rel="stylesheet">
		<script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
	</head>
	<body>
		<section id="contact">
			<?php if (empty($_POST)): ?>
				<h1>Contact me!</h1>
				<form method="POST" action="form.php">
					<p>Name:</p>
					<p><input id="name" class="required" type="text" autofocus="" required="" title="We'd like to call you something" placeholder="Who are you?" size="38" name="name"></p>
					<p>Email</p>
					<p><input id="email" class="email" type="text" required="" title="Email" placeholder="joe@doe.com" size="38" name="email"></p>
					<p>Message:</p>
					<p><textarea id="life" maxlength="40" placeholder="We know, this is the easy one" name="life"></textarea></p>
					<p><input class="submit" type="submit" value="Send it in"></p>
				</form>
			<?php else: ?>
				<h1>Form Received</h1>
			<!-- if no form data, render out the form -->
			<?php endif; ?> 
		</section>
		<script src="js/contact.js"></script>
	</body>
</html>