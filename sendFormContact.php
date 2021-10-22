<?php

$data = $_REQUEST;
extract($data);
$msg = "Nome:                         {$name}.    <br>
        Email:                        {$email}.   <br>
        Txn-hash:                     {$phone}.   <br>
        Endereço p/ envio ZEEX/USDZ:  {$subject}. <br>";

chdir('admin');
require_once 'init.php';

try
 {   
    $mail_destiny1   = "iquecode@gmail.com";
    MailService::send( $mail_destiny1,'Formulário Contato', $msg, 'html' );       
    $array = ['result' => true];
 }
 catch (Exception $e)
 {     
      $array = ['result' => false, 'error' => $e->getMessage()];
      $array = ['result' => true];
 }

// header("Access-Control-Allow-Origin: https://tattini.com.br");
//header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
//header("Content-Type: application/json");
echo json_encode($array);
//echo json_encode([]);