<?php

try{

require('connectDb.php'); 

}catch(PDOException  $e ){
echo "Error: ".$e;
}

/*
$id_parent = $_POST['id_parent'];
$title = $_POST['title'];
$content = $_POST['content'];
$category = $_POST['category'];
$meta_title = $_POST['meta_title'];
$meta_description = $_POST['meta_description'];
$meta_key = $_POST['meta_key'];
*/

try{
    

$dane = $db->query("SELECT id,id_parent,title,content,category,meta_title,meta_description,meta_key,link FROM pages");

$results=$dane->fetchAll(PDO::FETCH_ASSOC);
$json=json_encode($results);
echo $json;


/*
$dane->bindValue(':id_parent', $id_parent, PDO::PARAM_INT);
$dane->bindValue(':title', $title, PDO::PARAM_STR);
$dane->bindValue(':content', $content, PDO::PARAM_STR);
$dane->bindValue(':category', $category, PDO::PARAM_STR);
$dane->bindValue(':meta_title', $meta_title, PDO::PARAM_STR);
$dane->bindValue(':meta_description', $meta_description, PDO::PARAM_STR);
$dane->bindValue(':meta_key', $meta_key, PDO::PARAM_STR);
$dane->execute();*/

}catch(PDOException  $e ){
echo "Error: ".$e;
}
/*$dane->debugDumpParams();*/


/*
$dane = $db->prepare('SELECT login, haslo FROM uzytkownik WHERE login = :login AND haslo = :haslo ');
$dane->execute(array(':login' => $_POST['login'], ':haslo' => $_POST['haslo'] ));

class Foo {
    public $uid = 'aMemberVar Member Variable';
    public $aFuncName = 'aMemberFunc';
   
    
   
    public function sessionStart() {
       session_start();
       $_SESSION['uid'] = uniqid('_ang');
       return $_SESSION['uid'];
    }
}

$foo = new Foo;


$stmt->bindValue(':login', $login, PDO::PARAM_STR); $stmt->bindValue(':haslo', $haslo, PDO::PARAM_STR); $stmt->bindValue(':id', $id, PDO::PARAM_INT); 
$stmt->execute(); 

*/

     unset($db);
?>