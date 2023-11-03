<?php

$sname= "if0_35353015";
$unmae= "if0_35353015";
$password = "FSTEcqHDPE";

$db_name = "if0_35353015_aquatracker";

$conn = mysqli_connect($sname, $unmae, $password, $db_name);

if (!$conn) {
	echo "Connection failed!";
}