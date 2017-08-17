var random_images_array = ["01.jpg", "02.png", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.png", "08.jpg", "09.png", "10.jpg", "11.png", "12.jpg", "13.png", "14.png", "15.jpg", "16.png", "17.gif", "18.jpg", "19.png", "20.png", "21.jpg", "22.gif", "23.gif", "24.png", "25.jpg", "26.jpg", "27.png", "28.png", "29.png", "30.png", "31.jpg", "32.jpg", "33.jpg", "34.png", "35.jpg", "36.jpg", "37.png", "38.jpg", "39.jpg", "40.png", "41.jpg", "42.jpg", "43.jpg", "44.jpg", "45.png", "46.jpg"];
function getRandomImage(imgAr, path) {
path = path || 'images/'; 
var num = Math.floor( Math.random() * imgAr.length );
var img = imgAr[ num ];
var imgStr = '<img src="' + path + img + '" alt = "">';
document.write(imgStr); document.close();
}