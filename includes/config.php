<?php
	
	session_start();

	$dbcon = mysqli_connect("localhost", "root", "") or die("Server not connected..");
	
	mysqli_select_db($dbcon, "db_meta") or die("database not found..");
	
	session_name('user');

	echo "connected!";

?>