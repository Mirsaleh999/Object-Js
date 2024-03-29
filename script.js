// 2.
// function tarixFərqiTap(startDateString, endDateString) {
//     var başlamaTarixi = new Date(startDateString);
//     var sonTarix = new Date(endDateString);

//     var vaxtFərqi = sonTarix.getTime() - başlamaTarixi.getTime();
//     var günFərqi = Math.floor(vaxtFərqi / (1000 * 3600 * 24));

//     return günFərqi;
// }

// var başlama_tarixi = "2024-03-27";
// var son_tarix = "2027-03-01";
// var günFərqi = tarixFərqiTap(başlama_tarixi, son_tarix);
// console.log("İki tarix arasındakı gün sayı: " + günFərqi);


3.
var telebeler = [
    { ad: "Əli", soyad: "Hüseynov", girisBali: 60, cixisBali: 55 },
    { ad: "Fatma", soyad: "Məmmədova", girisBali: 40, cixisBali: 35 },
    { ad: "Nəzərin", soyad: "Quliyev", girisBali: 45, cixisBali: 30 },
    { ad: "Aysun", soyad: "Səfərova", girisBali: 55, cixisBali: 45 },
    { ad: "Cavid", soyad: "Əliyev", girisBali: 30, cixisBali: 20 }
];

telebeler = telebeler.filter(function(tələbə) {
    return tələbə.cixisBali >= 17 && (tələbə.girisBali + tələbə.cixisBali) >= 51;
});

console.log(telebeler);
