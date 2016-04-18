<?php

header('Content-Type: application/json');

try{

require('connectDb.php'); 

}catch(PDOException  $e ){
echo "Error: ".$e;
}

$apiArgArray = explode("/", substr(@$_SERVER['PATH_INFO'], 1));
//$returnObject = (object) array();
/* Based on the method, use the arguments to figure out
   whether you're working with an individual or a collection, 
   then do your processing, and ultimately set $returnObject */
switch ($_SERVER['REQUEST_METHOD']) {
  case 'GET':
  
  try {
      //  $id = $apiArgArray[0];
     //http://php.net/manual/en/function.empty.php 
     $params =  empty($apiArgArray[0]);  
      
      if($params) {
        //http://stackoverflow.com/questions/28911239/angularjs-resource-converting-query-resource-list-to-array-of-objects
          $stmt = $db->prepare("SELECT images, category FROM galery");
          $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        //$returnObject=$results;
        $json=json_encode($results, 0);
        
        echo $json;
        
                  
      } else {
        
        $stmt = $db->prepare("SELECT images, category FROM galery WHERE category=:category");  
        $category = $apiArgArray[0];
        $stmt->bindValue(':category', $category, PDO::PARAM_INT);
        //$stmt->bindParam(':id',$doDelete, PDO::PARAM_INT);
        $stmt->execute();
        $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
        //$returnObject=$results;
        $json=json_encode($results[0]);
        echo $json;
        
      }
      
  
   } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
  
  /*
   */
    break;
  case 'PUT':
 //$data = $_GET['id_parent'];
 //echo "date".$data;
  $id = $apiArgArray[0];       
    $category = $_GET['category_name'];
    
    try{
    
    $dane = $db->prepare("UPDATE galery_category set category_name=:category_name where id=:id");
    
    $dane->bindValue(':id', $id, PDO::PARAM_INT);
    $dane->bindValue(':category_name', $category, PDO::PARAM_STR);
    $dane->execute();
    }catch(PDOException  $e ){
    echo "Error: ".$e;
    }
    
    break;  
  case 'POST':      
    $category = $_POST['category_name'];
    
    try{
    
    $dane = $db->prepare("INSERT INTO galery_category (category_name) VALUES (:category_name)");
    
    $dane->bindValue(':category_name', $category, PDO::PARAM_STR);
    $dane->execute();
    }catch(PDOException  $e ){
    echo "Error: ".$e;
    }

  
    break;
  case 'DELETE':    
    // Delete collection or member
    $sql = "DELETE FROM galery_category WHERE id=:id";
    try {
        $stmt = $db->prepare("DELETE FROM galery_category WHERE id=:id");  
        $id = $apiArgArray[0];
        $stmt->bindValue(':id', $id, PDO::PARAM_INT);
        //$stmt->bindParam(':id',$doDelete, PDO::PARAM_INT);
        $stmt->execute();
        //print_r($db->errorInfo());
    //print_r($stmt->errorInfo());
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}'; 
    }
    echo "wykonałem Delete".@$_SERVER['PATH_INFO'];
    print_r($apiArgArray);
    break;
}
//echo json_encode($returnObject);

//http://stackoverflow.com/questions/4684075/how-to-build-a-restful-api

      unset($db);
?>