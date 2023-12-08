//değişkenler
var tutulanSayi=0;
var seviye=1;
var tahminEdilenSayi=0;
var tahminHak=5;
//HTML den verileri cekme işlemi
const btnTahmin=document.getElementById("btnTahmin");
const htTahmin=document.getElementById("tahmin");
const htSeviye=document.getElementById("seviye");
const mesaj=document.getElementById("mesaj");
const htTahminhak=document.getElementById("tahminHak");
const tbody=document.getElementById("tahminBody");

//İŞLEMLER
//random sayı getirme
function getRandomNumber(){
    return Math.floor(Math.random()*seviye*10)+1
}
//butona tıklandığında gerçekleşecek işlemler
btnTahmin.onclick=function(){
    tahminEdilenSayi=htTahmin.value;
    console.log(tutulanSayi);//random sayıyı consolda gormek için
    if(tahminHak!=0){//tahmin hak "-" ye düşmemesi için
        if(tahminEdilenSayi==tutulanSayi){
            mesaj.innerText="Tebrikler Bildiniz";
           tahminHak=5;
            TabloDoldur(tahminEdilenSayi,seviye)
            seviye++;
            tutulanSayi=getRandomNumber();
            htSeviye.innerText=seviye;
            htTahminhak.innerText=tahminHak;
            
        }else if(tahminEdilenSayi<tutulanSayi){
            mesaj.innerText="Daha buyuk bir sayı girin";
            tahminHak--;
            htTahminhak.innerText=tahminHak;
        }
        else if(tahminEdilenSayi>tutulanSayi){
             mesaj.innerText="Daha kucuk bir sayı girin";
             tahminHak--;
             htTahminhak.innerText=tahminHak;
        }
    }
    else{
        alert("Tahmin hakkınız doldu!")
    }
}
//ozet bilgi seviye atlandıkca tabloda gosteriliyor
function TabloDoldur(sayi,level){
const tr=document.createElement("tr");
tr.innerHTML=`

                <th>${sayi}</th>
                <th>${level}</th>
                <th>${tahminHak}</th>
              
`
tbody.append(tr);//
}
//
var timerActive=false;
htTahmin.onclick=function(){
if(!timerActive)
{
    timerActive=true;
    getTimer();
}
}


//yatığımız işlemleri ekrana getirme
window.onload=function(){
    tutulanSayi=getRandomNumber()
    htSeviye.innerText=seviye;
    htTahminhak.innerText=tahminHak;

}
//sre işlemleri
function getTimer(){
    var seconds=30;
    const timerElement=document.getElementById('timer');
    const timerHeader=document.getElementById('timerHeader');

    const countDown=setInterval(function(){
        seconds--;
        if(seconds==5){
            timerHeader.className='card-header bg-danger text-white';
        }
       timerElement.innerHTML=`<h1 class="text-center">${seconds}</h1>`
        if(seconds<=0){
            alert("süre doldu");
            timerActive=false;
            timerOver();
            clearInterval(countDown);
        }
    },1000);
}
function timeOver(){
    htTahmin.disabled=true,
    btnTahmin.disabled=true;
}




