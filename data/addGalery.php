<?php
//header("Content-Type: application/json");

try{

require('connectDb.php'); 
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException  $e ){
echo "Error: ".$e;
}
//   preg_match /[A-Z, a-z, .]{4}$/g

try{

$category = $_POST['category'];
$categorynew = $_POST['categorygalery'];
$files = isset($_FILES['files']) ? $_FILES['files'] : [];
//$db->setAttribute(PDO::ATTR_EMULATE_PREPARES,FALSE);
$result = array();
$check_connect = $db->query("SELECT MAX(id) FROM galery");
$result = $check_connect->fetchAll(PDO::FETCH_NUM); 
$file_last_id = $result[0][0]; 



class Fotos {
   function __construct($category, $categorynew, $file_last_id, $files, $db)
   {
      $this->category = $category;
      $this->categorynew = $categorynew;
      $this->file_last_id = $file_last_id;
      $this->category_last_id = 0;
      $this->files = $files;
      $this->db = $db;
   }
  public $listFotos = array(); 
   public function getCategory() {
        echo $this->category;
   }
   
   public function getFile_last_id() {
        echo $this->file_last_id;
   }
   
   public function getCategory_last_id() {
        $result = array();
        $check_connect = $this->db->query("SELECT MAX(id) FROM galery_category");
        $result = $check_connect->fetchAll(PDO::FETCH_NUM); 
        $this->category_last_id = $result[0][0]; 

        //echo $this->category_last_id;
   }
   
   public function createCategory() {
        if (!empty($this->categorynew) && $this->category == "") {
           $this->newCategory();
           $this->getCategory_last_id();
           $this->category = $this->category_last_id;
       }   
   }
   
   public function uploadFoto() {
        $file_ary = array();
        $file_count = count($this->files['name']);
        $file_keys = array_keys($this->files);
        $loop = $this->file_last_id;
        
        for ($i=0; $i<$file_count; $i++) {
                foreach ($file_keys as $key) {
                    $file_ary[$i][$key] = $this->files[$key][$i];
                }
                $this->fileMoveAndConvert($this->files['name'][$i], $this->files['tmp_name'][$i], $this->category);
            
            }
        
    //print_r($this->listFotos);
        echo json_encode($this->listFotos);
        return $file_ary;   
   }
   
   public function setup() {
    if (!empty($this->categorynew) && $this->category == "") {
        $this->createCategory();
    }
    if(!empty($this->files)) $this->uploadFoto();
   }
   
   public function fileMoveAndConvert($arrayNameFotos, $arrayTmpFotos, $category) {
      preg_match("/[A-Z, a-z, .]{4}$/i", $arrayNameFotos, $imagesType);
        $fotosname = $imagesType[0];
        $file_tmp = $arrayTmpFotos;
        $file_name = $this->file_last_id;
        $file_name_full = $category."-".$file_name.$fotosname;
        //echo "file_name_full - ".$file_name_full;
        move_uploaded_file($file_tmp, "D:/wamp/www/images/".$file_name_full);
        $this->dbSaveFile($file_name_full, $category);
        
        $this->file_last_id++;
 
   }
   
   public function newCategory() {
       //$this->categorynew;
       if (!empty($this->categorynew)) {
        $dane = $this->db->prepare("INSERT INTO galery_category (category_name) VALUES (:categoryname)");
        $dane->bindValue(':categoryname', $this->categorynew, PDO::PARAM_STR);
            $dane->execute();
        }
   }
   
   public function dbSaveFile($file_name, $category) {
       
       
       
     //  echo "dbSaveFile - ".$file_name." - ". $category;
       try {
       $dane = $this->db->prepare("INSERT INTO galery (category,images) VALUES (:category,:images)");
        
        $dane->bindValue(':category', $category, PDO::PARAM_INT);
        $dane->bindValue(':images', $file_name, PDO::PARAM_STR);
        $dane->execute();
        
        //$this->listFotos;
        array_push($this->listFotos, $file_name);
        
        }catch(PDOException  $e ){
        echo "Error: ".$e;
        } 
        
   }
 //   http://php.net/manual/en/keyword.class.php
}

$galery = new Fotos($category, $categorynew, $file_last_id, $files, $db);

//$galery->getCategory();

//$galery->getFile_last_id();

//$galery->newCategory();
//$galery->getCategory_last_id();

$galery->setup();

    

}catch(PDOException  $e ){
echo "Error: ".$e;
}




?>