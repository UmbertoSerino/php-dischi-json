<?php
// recuperiamo il file json
$albums = file_get_contents('../json/albums.json');
// avvertiamo il browser che sta per arrivargli un file json
header('Content-Type: application/json');
echo $albums;
