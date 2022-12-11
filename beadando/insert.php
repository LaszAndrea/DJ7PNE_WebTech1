<?php

$szerver = "localhost";
$felhasznalonev = "root";
$jelszo = "";
$adatbazisnev= "webtech_form";
 
$conn = mysqli_connect($szerver, $felhasznalonev, $jelszo, $adatbazisnev);

if(isset($_POST['submit']))
{
    if(!empty($_POST['firstname']) && !empty($_POST['lastname']) && !empty($_POST['old']) && !empty($_POST['favseason']) && !empty($_POST['rate']) && 
        !empty($_POST['favourites']) && !empty($_POST['finished']) && !empty($_POST['email']) && !empty($_POST['phone']))
    {

        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $old = $_POST['old'];
        $favseason = $_POST['favseason'];
        $rate = $_POST['rate'];
        $favourites = $_POST['favourites'];
        $finished = $_POST['finished'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];

        $query = "insert into the100_form(firstname,lastname,old,favseason,rate,favourites,finished,email,phone) values ('$firstname', '$lastname', '$old', '$favseason', '$rate', '$favourites', '$finished', '$email', '$phone')";

        $run = mysqli_query($conn, $query) or die(mysqli_error($conn));

        if($run)
        {
            echo "Sikeres kitoltes";
        }

        else
        {
            echo "sikertelen kitoltes";
        }

    }
}
else
{
    echo "Minden mezot ki kell tolteni";
}


?>