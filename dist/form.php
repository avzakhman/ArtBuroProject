<?php
 
// Токен
  const TOKEN = 'вставить токен сюда';
 
  // ID чата
  const CHATID = 'вставить id чата сюда';

 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  // Проверяем не пусто ли поле с телефоном
  if (!empty($_POST['phone'])) {
     
    // Если нет, то валидируем и добавляем в тело сообщения
    $txt = "";
     
    // Номер телефона
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "" . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
     
    // текст сообщения
    if (isset($_POST['theme']) && !empty($_POST['theme'])) {
        $txt .= "" . strip_tags(urlencode($_POST['theme']));
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
    if( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
      echo json_encode('SUCCESS');
    } else {
      echo json_encode('ERROR');
    }
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}
