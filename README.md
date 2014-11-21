imza.js
=======

Kurumsal Şirketler için Hazır imza eklentisi 


// kullanımı 

öncelikle imza.js dosyasını syfanıza ekleyin. 
daha sonra script tagları içerisinde 
```javascript
<script type="text/javascript">
$(function(){
  
  $("body").imza(); // varsayılan değerler alınarak kulanım şekli 
  
  // parametreli kullanım şekli 
  
  $('body').imza({
			metin: 'Design And Code By', // üzerine geldiğinde görünecek metin. varsayılan olarak design And Code By
			url : 'http://vehbiakdogan.com', // Tıklandığında yönlendirilecek adres. varsayılan olarak boş
			logoYol: 'logo.png', // şirket logosunun yolu. varsayılan olarak style/images/logo.png 
			color : '#000' // girilen metnin rengi. varsayılan olarak #000
		});
  
});


</script>
```
Şeklinde Kullanabilirsiniz 
<a href="http://vehbiakdogan.com/demolar/imza/imza-ekle.html" target="_blank">Demo </a>

