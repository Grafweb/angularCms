<?php

try{

require('connectDb.php'); 

}catch(PDOException  $e ){
echo "Error: ".$e;
}

$apiArgArray = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
$returnObject = (object) array();

/* Based on the method, use the arguments to figure out
   whether you're working with an individual or a collection, 
   then do your processing, and ultimately set $returnObject */
$request = $_SERVER['REQUEST_METHOD'];
$id = $apiArgArray[0];
$column = (!($request== 'PUT'))? $apiArgArray[1] : 0;       
//(isset($var))
//    $id_parent = $_GET['id_parent'];
//     $title = $_GET['title'];
//     $content = $_GET['content'];
//     $category = $_GET['category'];
//     $meta_title = $_GET['meta_title'];
//     $meta_description = $_GET['meta_description'];
//     $meta_key = $_GET['meta_key'];
//     $component_galery = $_GET['component_galery']; //component_galery


class AddSite {
   function __construct($request ,$id, $db, $column)
   {
      $this->request = $request; 
      $this->id = $id;
      $this->db = $db;
      $this->column = $column;
      $this->id_parent = 0;
      $this->title = "";
      $this->content = "";
      $this->category = 0;
      $this->link = "";
      $this->meta_title = "";
      $this->meta_description = "";
      $this->meta_key = "";
      $this->component_galery = "";
      $this->category_foto = 0;
   }
   
      
   
   public function getData() {       
        $this->id_parent = $_GET['id_parent'];
        $this->title = $_GET['title'];
        $this->content = $_GET['content'];
        $this->category = $_GET['category'];
        $this->link = $_GET['link'];
        $this->meta_title = $_GET['meta_title'];
        $this->meta_description = $_GET['meta_description'];
        $this->meta_key = $_GET['meta_key'];
        $this->component_galery = (isset($_GET['component_galery'])) ? $_GET['component_galery'] : 0; //component_galery
        $this->category_foto = (isset($_GET['category_foto'])) ? $_GET['category_foto'] : 0;
        echo "component_galery".$this->component_galery;
   }
   
   public function postData() {
        $this->id = $apiArgArray[0];       
        $this->id_parent = $_POST['id_parent'];
        $this->title = $_POST['title'];
        $this->content = $_POST['content'];
        $this->category = $_POST['category'];
        $this->link = $_POST['link'];
        $this->meta_title = $_POST['meta_title'];
        $this->meta_description = $_POST['meta_description'];
        $this->meta_key = $_POST['meta_key'];
        $this->component_galery = (isset($_POST['component_galery'])) ? $_POST['component_galery'] : 0; //component_galery
        $this->category_foto = (isset($_POST['category_foto'])) ? $_POST['category_foto'] : 0;
 //component_galery
   }
   
   public function get() {
       if($this->column == -1 && $this->id==-1) {
       //echo $this->column." - ".$this->id;
          $stmt = $this->db->prepare("SELECT id,id_parent,title,content,category,link,meta_title,meta_description,meta_key,component_galery,category_foto FROM pages");
          $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        //$returnObject=$results;
        $json=json_encode($results);
        
       } else {
          $stmt = $this->db->prepare("SELECT id,id_parent,title,content,category,link,meta_title,meta_description,meta_key,component_galery,category_foto FROM pages WHERE $this->column=:id");
          $stmt->bindValue(':id', $this->id, PDO::PARAM_INT);
          $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        //$returnObject=$results;
        $json=json_encode($results[0]);   
       }
        //$t->bindParam(':id',$doDelete, PDO::PARAM_INT);
        echo $json;   
   }
   
   public function put() {
       $this->getData();
        $dane = $this->db->prepare("UPDATE pages set id_parent=:id_parent, title=:title, content=:content, category=:category, link=:link, meta_title=:meta_title, meta_description=:meta_description, meta_key=:meta_key, component_galery=:component_galery, category_foto=:category_foto where id=:id");
    
        $dane->bindValue(':id', $this->id, PDO::PARAM_INT);
        $dane->bindValue(':id_parent', $this->id_parent, PDO::PARAM_INT);
        $dane->bindValue(':title', $this->title, PDO::PARAM_STR);
        $dane->bindValue(':content', $this->content, PDO::PARAM_STR);
        $dane->bindValue(':category', $this->category, PDO::PARAM_STR);
        $dane->bindValue(':link', $this->link, PDO::PARAM_STR);
        $dane->bindValue(':meta_title', $this->meta_title, PDO::PARAM_STR);
        $dane->bindValue(':meta_description', $this->meta_description, PDO::PARAM_STR);
        $dane->bindValue(':meta_key', $this->meta_key, PDO::PARAM_STR);
        $dane->bindValue(':component_galery', $this->component_galery, PDO::PARAM_STR);
        $dane->bindValue(':category_foto', $this->category_foto, PDO::PARAM_STR);
        
        $dane->execute();   
   }
   
   public function save() {
       $this->postData();
        $dane = $this->db->prepare("INSERT INTO pages (id_parent,title,content,category,link,meta_title,meta_description,meta_key,component_galery,category_foto) VALUES (:id_parent,:title,:content,:category,:meta_title,:meta_description,:meta_key,:component_galery,:category_foto)");
    
        $dane->bindValue(':id', $this->id, PDO::PARAM_INT);
        $dane->bindValue(':id_parent', $this->id_parent, PDO::PARAM_INT);
        $dane->bindValue(':title', $this->title, PDO::PARAM_STR);
        $dane->bindValue(':content', $this->content, PDO::PARAM_STR);
        $dane->bindValue(':category', $this->category, PDO::PARAM_STR);
        $dane->bindValue(':link', $this->link, PDO::PARAM_STR);
        $dane->bindValue(':meta_title', $this->meta_title, PDO::PARAM_STR);
        $dane->bindValue(':meta_description', $this->meta_description, PDO::PARAM_STR);
        $dane->bindValue(':meta_key', $this->meta_key, PDO::PARAM_STR);
        $dane->bindValue(':component_galery', $this->component_galery, PDO::PARAM_STR);
        $dane->bindValue(':category_foto', $this->category_foto, PDO::PARAM_STR);
    
        $dane->execute();   
   }
   
   public function del() {
        $stmt = $this->db->prepare("DELETE FROM pages WHERE id=:id");  
        $stmt->bindValue(':id', $this->id, PDO::PARAM_INT);
        //$stmt->bindParam(':id',$doDelete, PDO::PARAM_INT);
        $stmt->execute();
           
   }
   //$dane = $db->prepare("INSERT INTO pages (id_parent,title,content,category,meta_title,meta_description,meta_key,component_galery,category_foto) VALUES (:id_parent,:title,:content,:category,:meta_title,:meta_description,:meta_key,:component_galery,:category_foto)");
    public function initial() {
        if($this->request == "GET") $this->get();
        if($this->request == "PUT") $this->put();
        if($this->request == "POST") $this->save();
        if($this->request == "DELETE") $this->del();
    }
   
}

$apiSetup = new AddSite($request ,$id ,$db, $column);
$apiSetup->initial();

// switch ($_SERVER['REQUEST_METHOD']) {
//   case 'GET':
//         $id = $apiArgArray[0];
//   
//     $stmt = $db->prepare("SELECT id,id_parent,title,content,category,meta_title,meta_description,meta_key,component_galery FROM pages WHERE id=:id");  
//         $id = $apiArgArray[0];
//         $stmt->bindValue(':id', $id, PDO::PARAM_INT);
//         //$stmt->bindParam(':id',$doDelete, PDO::PARAM_INT);
//         $stmt->execute();
//         $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
//         //$returnObject=$results;
//         $json=json_encode($results[0]);
//         echo $json;
//     break;
//   case 'PUT':
//  //$data = $_GET['id_parent'];
//  //echo "date".$data;
//   $id = $apiArgArray[0];       
//    $id_parent = $_GET['id_parent'];
//     $title = $_GET['title'];
//     $content = $_GET['content'];
//     $category = $_GET['category'];
//     $meta_title = $_GET['meta_title'];
//     $meta_description = $_GET['meta_description'];
//     $meta_key = $_GET['meta_key'];
//     $component_galery = $_GET['component_galery']; //component_galery
//     
//     try{
//     
//     $dane = $db->prepare("UPDATE pages set id_parent=:id_parent, title=:title, content=:content, category=:category, meta_title=:meta_title, meta_description=:meta_description, meta_key=:meta_key, component_galery=:component_galery where id=:id");
//     
//     $dane->bindValue(':id', $id, PDO::PARAM_INT);
//     $dane->bindValue(':id_parent', $id_parent, PDO::PARAM_INT);
//     $dane->bindValue(':title', $title, PDO::PARAM_STR);
//     $dane->bindValue(':content', $content, PDO::PARAM_STR);
//     $dane->bindValue(':category', $category, PDO::PARAM_STR);
//     $dane->bindValue(':meta_title', $meta_title, PDO::PARAM_STR);
//     $dane->bindValue(':meta_description', $meta_description, PDO::PARAM_STR);
//     $dane->bindValue(':meta_key', $meta_key, PDO::PARAM_STR);
//     $dane->bindValue(':component_galery', $component_galery, PDO::PARAM_STR);
//     
//     $dane->execute();
//     }catch(PDOException  $e ){
//     echo "Error: ".$e;
//     }
//     
//     break;  
//   case 'POST':      
//    $id_parent = $_POST['id_parent'];
//     $title = $_POST['title'];
//     $content = $_POST['content'];
//     $category = $_POST['category'];
//     $meta_title = $_POST['meta_title'];
//     $meta_description = $_POST['meta_description'];
//     $meta_key = $_POST['meta_key'];
//     $component_galery = $_POST['component_galery'];
//     $category_foto = $_POST['category_foto'];
//     
//     try{
//     
//     $dane = $db->prepare("INSERT INTO pages (id_parent,title,content,category,meta_title,meta_description,meta_key,component_galery,category_foto) VALUES (:id_parent,:title,:content,:category,:meta_title,:meta_description,:meta_key,:component_galery,:category_foto)");
//     
//     $dane->bindValue(':id_parent', $id_parent, PDO::PARAM_INT);
//     $dane->bindValue(':title', $title, PDO::PARAM_STR);
//     $dane->bindValue(':content', $content, PDO::PARAM_STR);
//     $dane->bindValue(':category', $category, PDO::PARAM_STR);
//     $dane->bindValue(':meta_title', $meta_title, PDO::PARAM_STR);
//     $dane->bindValue(':meta_description', $meta_description, PDO::PARAM_STR);
//     $dane->bindValue(':meta_key', $meta_key, PDO::PARAM_STR);
//     $dane->bindValue(':component_galery', $component_galery, PDO::PARAM_STR);
//     $dane->bindValue(':category_foto', $category_foto, PDO::PARAM_INT);
//     $dane->execute();
//     }catch(PDOException  $e ){
//     echo "Error: ".$e;
//     }
// 
//   
//     break;
//   case 'DELETE':    
//     // Delete collection or member
//     $sql = "DELETE FROM pages WHERE id=:id";
//     try {
//         $stmt = $db->prepare("DELETE FROM pages WHERE id=:id");  
//         $id = $apiArgArray[0];
//         $stmt->bindValue(':id', $id, PDO::PARAM_INT);
//         //$stmt->bindParam(':id',$doDelete, PDO::PARAM_INT);
//         $stmt->execute();
//         //print_r($db->errorInfo());
//     //print_r($stmt->errorInfo());
//     } catch(PDOException $e) {
//         echo '{"error":{"text":'. $e->getMessage() .'}}'; 
//     }
//     echo "wykonałem Delete".@$_SERVER['PATH_INFO'];
//     print_r($apiArgArray);
//     break;
// }
//echo json_encode($returnObject);

//http://stackoverflow.com/questions/4684075/how-to-build-a-restful-api

     unset($db);
?>