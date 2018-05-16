<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['phone'])&&$_POST['phone']!="")){ //Проверка отправилось ли наше поля name и не пустые ли они
    $to = 'yarikione@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['phone'].'</p>  
                        <p>Email:'.$_POST['email'].'</p>      
                        <p>Как давно вы наш клиент:'.$_POST['client'].'</p> 
                        <p>Что изменить:'.$_POST['edit'].'</p>                 
                        <p>Что нравиться:'.$_POST['simpatia'].'</p>                 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Отправитель <d.a.lebedinskyi@gmail.com>\r\n"; //Наименование и почта отправителя
    if(mail($to, $subject, $message, $headers)){
        echo 1;
        return;
    } //Отправка письма с помощью функции mail
}
 echo 0;
?>