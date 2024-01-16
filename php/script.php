<?php
$albums = file_get_contents("../json/albums.json");
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
echo $albums;
