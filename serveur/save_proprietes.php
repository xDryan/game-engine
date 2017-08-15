<?php
$json_data = print_r(json_decode(file_get_contents('php://input'), true), true);
file_put_contents('proprietes.json', $json_data);
?>
