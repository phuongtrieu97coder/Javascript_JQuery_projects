<?php
$myfile = fopen("json_demo3.json","r") or die("unable to open the file");
$json_machine_obj = fread($myfile,filesize("json_demo3.json"));
echo "get_data(".$json_machine_obj.")";
?>
