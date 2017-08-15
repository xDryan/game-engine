<?php
$nomMap = print_r(json_decode(file_get_contents('php://input'), true), true);

$map = file_get_contents('maps/mapSave.json');
file_put_contents("maps/$nomMap.json", $map);
?>
