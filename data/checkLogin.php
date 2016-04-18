<?php
session_start();
header('Content-Type: application/json');
$user = (isset($_SESSION['login']))? $_SESSION['login'] : "";
$arr = array('login' => true, 'user' => $user);
if(isset($_SESSION['uid'])) { 
    echo json_encode($arr); 
} else {
    $arr['login'] = false;
    echo json_encode($arr);
}

?>