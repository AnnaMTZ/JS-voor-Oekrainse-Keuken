
const selectionMenu = [
{
    id: 1, 
    title: "Pannenkoeken met romige champignonsaus",
    category: "Groente",
    img: "home_recepten/pannenkoeken_champignons.jpg",
    link: "pannenkoeken_met_champignonsaus.html",
},

{
    id: 2, 
    title: "Groenteragout",
    category: "Groente",
    img: "home_recepten/groentetagout.jpg",
    link: "groenteragout.html",
},

{
    id: 3, 
    title: "Aardappelpannenkoekjes",
    category: "Groente",
    img: "home_recepten/deruny.jpg",
    link: "deroeny.html",
},

{
    id: 4, 
    title: "Borsjtsj",
    category: "Vlees",
    img: "home_recepten/borsh.jpg",
    link: "borsh.html",
},

{
    id: 5, 
    title: "Broodje met sprotje",
    category: "Vis",
    img: "home_recepten/sprotje.jpg",
    link: "broodje_sprotje.html",
},

{
    id: 6, 
    title: "Salade met Chinese kool en surimi",
    category: "Vis",
    img: "home_recepten/chinese_kool_salade.jpg",
    link: "salade_met_chinese_kool.html",
},

{
    id: 7, 
    title: "Salade Bedekte haring",
    category: "Vis",
    img: "home_recepten/shuba.jpg",
    link: "shuba.html",
},

{
    id: 8, 
    title: "Hapje gebakken aardappels met haring",
    category: "Vis",
    img: "home_recepten/hapje_aardappelen.jpg",
    link: "aardappels_met_haring.html",
},

{
    id: 9, 
    title: "Kippensoep met boekweit",
    category: "Kip",
    img: "home_recepten/kippensoep.jpg",
    link: "kippensoep.html",
},

{
    id: 10, 
    title: "Salade Varya Hoetsoelska",
    category: "Groente",
    img: "home_recepten/varya_hoetsoelska1.jpg",
    link: "varya.html",
},

{
    id: 11, 
    title: "Aubergine spread",
    category: "Groente",
    img: "home_recepten/aubergine.jpg",
    link: "aubergine_spread.html",
},

{
    id: 12, 
    title: "Salade Vinegret",
    category: "Groente",
    img: "home_recepten/vinegret.jpg",
    link: "vinegret.html",
},

{
    id: 13, 
    title: "Gestoofde kool",
    category: "Groente",
    img: "home_recepten/kool.jpg",
    link: "gestoofde_witte_kool.html",
},

{
    id: 14, 
    title: "Okroshka",
    category: "Groente",
    img: "home_recepten/okroshka.jpg",
    link: "okroshka.html",
},

{
    id: 15, 
    title: "3 x gevuld ei",
    category: "Vlees",
    img: "home_recepten/gevuld-ei.jpg",
    link: "gevuld_ei.html",
},

{
    id: 16, 
    title: "Holodnyk",
    category: "Groente",
    img: "home_recepten/holodnyk.jpg",
    link: "holodnyk.html",
},

{
    id: 17, 
    title: "Koreaanse worteltjes",
    category: "Groente",
    img: "home_recepten/koreaanse_worteltjes.jpg",
    link: "koreaanse_worteltjes.html",
},

{
    id: 18, 
    title: "Hapje aardappelen met haring",
    category: "Vis",
    img: "home_recepten/hapje_aardappelen.jpg",
    link: "aardappels_met_haring.html",
},

{
    id: 19, 
    title: "Gefermenteerde kool",
    category: "Groente",
    img: "home_recepten/gefermenteerde_kool.jpg",
    link: "gefermenteerde_kool.html",
},

{
    id: 20, 
    title: "Koolsoep met verse kool",
    category: "Vlees",
    img: "home_recepten/koolsoup.jpg",
    link: "koolsoup.html",
},

{
    id: 21, 
    title: "3X salade met rode biet",
    category: "Groente",
    img: "home_recepten/3rodebiet.jpg",
    link: "driebietsalade.html",
},

{
    id: 22, 
    title: "Pyrizhky met vlees",
    category: "Vlees",
    img: "home_recepten/pyrizhky_met_vlees.jpg",
    link:"pyrizhky_met_vlees.html",
},

];

const sectionCenter = document.querySelector(".section-center");
const filterBtns = document.querySelectorAll('.filter-btn');


// load items

window.addEventListener("DOMContentLoaded", function () {
   displayMenuItems(selectionMenu);
});

// filter items

filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
        const category = e.currentTarget.dataset.id;
        const menuCategory = selectionMenu.filter(function(menuItem) {

if(menuItem.category === category) {

    return menuItem;
}
        });
        if (category === "Alles") {
            displayMenuItems(selectionMenu);
        } else {
            displayMenuItems(menuCategory);
        }
    });
});


function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `<article class="menu-item">

        <li class='recListItem'>

        <div class="item-info">
        <h2>${item.title}</h2>
    </div>
         
          <div class="recListImg"><a href=${item.link} target="_blank">
              <img src=${item.img} loading="lazy" alt=${item.title} width="200" height="200"></a></div>
              
             
        </li>
      </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

