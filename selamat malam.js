<!DOCTYPE html>
<html>
<script>
function tes(){
var a=prompt("Masukan nama atau teks","");
var b=new Date();
var c=b.getHours();
if(c>0 && c<4){
c="Dah lewat tengah malam,,,susah tidur ya...";
}else if(c>=0 && c<4){
c="Dah lewat tengah malam,,,susah tidur ya...?";
}else if(c>=4 && c<9){
c="Selamat pagi,,,dah sarapan belum...?";
}else if(c>=9 && c<16){
c="Selamat siang,,,dah makan belum...?";
}else if(c>=16 && c<18){
c="Udah sore siap� istirahat";
}else if(c>=18 && c<19){
c="Magrib sebentar lagi selamat menunaikan ibadah shalat magrib";
}else if(c>=19 && c<22){
c="Selamat malam";
}else if(c>=22 && c<24){
c="Dah malam Met bobo ya";
}
{
document.getElementById("aaa").innerHTML=c;
document.getElementById("bbb").innerHTML=a;
}
}</script>

<br>Klik tombol : <button type="button"onClick="tes()">Coba</button><br><br>Hasilnya :<br><span style="color:blue;"id="aaa"></span>�������<span style="color:red;"id="bbb"></span><br>

</body>
</html>

