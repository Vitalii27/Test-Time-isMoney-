<?php
<?php
header('Content-Type: text/json; charset-utf-8');
if(isset($_POST['email'])&& isset($_POST['subject'])){
  $aRes = array('mes' => 'Done auth', 'status' => 'OK');
  echo json_encode($aRes);
}
else{
  echo 'Данные не получены';
}