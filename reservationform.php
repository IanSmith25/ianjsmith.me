<?php

if (isset($_POST['submit'])) {
  $name = $_POST['CustomerName'];
  $email = $_POST['CustomerEmail'];
  $phone = $_POST['CustomerPhone'];
  $address = $_POST['CustomerAddress'];
  $age = $_POST['CustomerAge'];
  $resstartdate = $_POST['ReservationStartDate'];
  $resenddate = $_POST['reservationenddate'];
  $roomtype = $_POST['roomType'];
  $numofguest = $_POST['guests'];
  $roompackage = $_POST['Package'];
  $roomreq = $_POST['Addon'];
  
  $mailTo = "is02939@georgiasouthern.edu";
  $headers = "From: ".$email;
  $txt = "You have received an e-mail from ".$name.".\n\n".$phone.".\n".$address".\n".$age".\n".$resstartdate".\n".$resenddate".\n".$roomtype".\n".$numofguests".\n".$roompackage".\n".$roomreq;
  
  mail($mailTo, "Contact Form From ianjsmith.me", $txt, $headers);
  header("Location: reservation.php?mailsend");
