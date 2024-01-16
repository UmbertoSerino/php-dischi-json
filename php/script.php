<?php
$albums = file_get_contents("../json/albums.json");
// senza questo header: Bloccata richiesta multiorigine (cross-origin): il criterio di corrispondenza dell’origine non consente la lettura della risorsa remota da http://127.0.0.1/repo_di_prova/PHP/php-dischi-json/php/script.php. Motivo: header CORS “Access-Control-Allow-Origin” mancante. Codice di stato: 200.
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
echo $albums;
