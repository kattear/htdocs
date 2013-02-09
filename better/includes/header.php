<?php 
	$titles = array(
		'contact' => 'Contact Me!',
		'home' => 'Welcome to my page', 
		'404' => "Where do you think you're going"
	);
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<title><?php echo $titles[$page]; ?></title>
		<meta character="utf-8"/>
		<link href="http:/fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet" />
		<link href="rel stylesheet" href="css/main.css" />
		<link href="css/<?php echo $page; ?>.css" rel-"stylesheet" />
	</head>

	<body>