<?php

$myfile = fopen("car_dealership_price.json", "r") or die("Unable to open file!");
$json_obj =  fread($myfile,filesize("car_dealership_price.json"));
echo "car_price(".$json_obj.")";

?>
