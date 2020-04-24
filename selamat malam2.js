<script type='text/javascript' src='https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js'></script>
<script>
function startTimeSalam(){
var ucapanSalam = "";
var todaySalam=new Date();
var hSalam=todaySalam.getHours();
var mSalam=todaySalam.getMinutes();
var sSalam=todaySalam.getSeconds();
mSalam=checkTime(mSalam);
sSalam=checkTime(sSalam);
if (hSalam < 4) {ucapanSalam = "Selamat Malam Sobat MEW"}
else {if (hSalam < 11) {ucapanSalam = "Selamat Pagi Sobat MEW"}
else {if (hSalam < 16) {ucapanSalam = "Selamat Siang Sobat MEW"}
else {if (hSalam < 20) {ucapanSalam = "Selamat Sore Sobat MEW"}
else {ucapanSalam = "Selamat Malam Sobat MEW";}}}}
$(".salam")(hSalam+":"+mSalam+":"+sSalam+" "+ucapanSalam);
tSalam=setTimeout('startTimeSalam()',500);}
function checkTime(i){if (i<10){i="0" + i;}return i;}
window.onload = startTimeSalam();
</script>
<span class="salam"></span>