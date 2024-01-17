<?php
$albums = file_get_contents("../json/albums.json");

header("Content-Type: application/json");
echo $albums;
