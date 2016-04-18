<?php
//header("Content-Type: application/json");
    
//print_r($_FILES);
//mysql_connect("localhost:82","root","");
//mysql_select_db("cmsweb")  or die("Zapytanie niepoprawne db");


require('connectDb.php'); 

$dane = $db->prepare('SELECT login, haslo FROM uzytkownik WHERE login = :login AND haslo = :haslo ');
$dane->execute(array(':login' => $_POST['login'], ':haslo' => $_POST['haslo'] ));

class Foo {
    public $uid = 'aMemberVar Member Variable';
    public $aFuncName = 'aMemberFunc';
   
    
   
    public function sessionStart() {
       
       $_SESSION['uid'] = uniqid('_ang');
       return $_SESSION['uid'];
    }
}

$foo = new Foo; 

//echo "fetchColumn() ".$dane->rowCount();
//while($wiersz = $dane->fetch(PDO::FETCH_ASSOC)) {  
  //  echo $wiersz['login'],' ',$wiersz['haslo'];  
//}  

//mysql_query("INSERT INTO `uzytkownik`(`login`, `haslo`) VALUES ('Darek', 'Darek26')") or die("Zapytanie niepoprawne query");
//mysql_query("SELECT `login`, `haslo` FROM `uzytkownicy` WHERE `login` = '".$login."' AND `haslo` = '".$haslo."'") ;

 
if (isset($_POST['login']))
{
	$login = $_POST['login'];
	$haslo = $_POST['haslo'];
	//$ip = filtruj($_SERVER['REMOTE_ADDR']);
 
	// sprawdzamy czy login i has³o s¹ dobre
	if ($dane->rowCount() > 0)
	{
		// uaktualniamy date logowania oraz ip
		//mysql_query("UPDATE `uzytkownicy` SET (`logowanie` = '".time().", `ip` = '".$ip."'') WHERE login = '".$login."';");
        session_start();
		$_SESSION['zalogowany'] = true;
		$_SESSION['login'] = $login;
                
     $sesMain = $foo->sessionStart(); 
                
                
     $dataLogin = array(
          'log'    => true,
          'login' => $_POST['login'],
          'ses' => $sesMain   
     );
                
                echo json_encode($dataLogin);
		// zalogowany
 
	}
	else echo "Wpisano z³e dane.";
}

     unset($db);
?>