const girisKutusu = document.getElementById("veri-kutusu");
const listeKutusu = document.getElementById("liste");
const gorevSayisi = document.getElementById("gorev-sayisi");

gorevleriYukle();

function elemanEkle(){

if(girisKutusu.value.trim()===''){
alert("Lütfen bir görev yazın!");
return;
}

let li = document.createElement("li");

li.innerHTML=girisKutusu.value;

if(girisKutusu.value.includes("Acil")){
li.classList.add("acil");
}

listeKutusu.appendChild(li);

let span=document.createElement("span");

span.innerHTML='<i class="fa-solid fa-trash"></i>';

li.appendChild(span);

girisKutusu.value="";
girisKutusu.focus();

verileriKaydet();
gorevSayaciniGuncelle();
}

/* Enter tuşu */

girisKutusu.addEventListener("keyup",function(event){

if(event.key==="Enter"){
elemanEkle();
}

});

/* Liste olayları */

listeKutusu.addEventListener("click",function(e){

if(e.target.tagName==="LI"){
e.target.classList.toggle("yapildi");
verileriKaydet();
}

else if(e.target.tagName==="SPAN" || e.target.tagName==="I"){
e.target.closest("li").remove();
verileriKaydet();
gorevSayaciniGuncelle();
}

});

/* local storage kaydetme */

function verileriKaydet(){
localStorage.setItem("todoList",listeKutusu.innerHTML);
}

/* local storage yükleme */

function gorevleriYukle(){
listeKutusu.innerHTML=localStorage.getItem("todoList");
gorevSayaciniGuncelle();
}

/* görev sayacı */

function gorevSayaciniGuncelle(){

let toplam=listeKutusu.querySelectorAll("li").length;

gorevSayisi.innerText="Toplam görev: "+toplam;

}

/* tümünü temizle */

function tumunuTemizle(){

listeKutusu.innerHTML="";

verileriKaydet();

gorevSayaciniGuncelle();

}