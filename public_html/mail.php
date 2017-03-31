
<?php
// echo json_encode($_POST); die;
$result=array();


$name=$_POST['name'];
$phone=$_POST['phone'];
$email=$_POST['email'];
$text=$_POST['text'];
$title=$_POST['title'];
$from=$_POST['name'];

if ($_POST)
{
	$result=array();
    $email_to  = "<emgav101@yandex.ru>, <emgav103@yandex.ru >" ;
    $subject = " Заявка с сайта Госприёмная.рф";
    $headers = "From: $from\n";
  
	$flag1=false;
    $flag2=false;
    
	if (($phone)) {$flag1=true;}
    else{$flag1=false;}
    
    if (($email)) {$flag2=true;}
    else{$flag2=false;}
    
    
	if ($flag1==true)
	{
		$message =    
            'Имя: '.$name."\n".
            'Телефон: '.$phone."\n".
            'Сообщение: '.$text."\n".
            'Заголовок формы: '.$title;
			
		if(mail($email_to, $subject, $message, $headers))
		{
			$result['code']=1;
			$result['text']='Сообщение отправлено';
		}
		else
	    {
	        $result['code']=0;
			$result['text']='Сообщение не отправлено';
	    }
    }
    
    else if ($flag2==true)
	{
		$message =    
            'Имя: '.$name."\n".
            'Email: '.$email."\n".
            'Текст отзыва: '.$text."\n".
            'Заголовок формы: '.$title;
			
		if(mail($to, $subject, $message, $headers))
		{
			$result['code']=1;
			$result['text']='Сообщение отправлено';
		}
		else
	    {
	        $result['code']=0;
			$result['text']='Сообщение не отправлено';
	    }
    }
    else
    {
        $result['code']=0;
		$result['text']='Не все обязательные поля заполнены';
    }
}
else
{
	$result['code']=0;
	$result['text']='Дай мне хоть что то)';
}
echo json_encode($result);
?>
