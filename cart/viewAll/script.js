let products=[
{name:"iPhone 15",price:"69999",img:"https://vsprod.vijaysales.com/media/catalog/product/2/2/220949-image1_2.jpg?optimize=medium&fit=bounds&height=500&width=500"},
{name:"Samsung Mobile",price:"24999",img:"https://dakauf.eu/wp-content/uploads/2024/02/Samsung-Galaxy-S24-Ultra-Titanium-Black.jpg"},
{name:"Laptop",price:"55999",img:"https://p3-ofp.static.pub//fes/cms/2025/11/03/spb03879hxow8z26wlb9lffipfu5pq315012.png?width=584&height=584"},
{name:"Smart Watch",price:"1999",img:"https://m.media-amazon.com/images/I/41vC7jNGSQL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"Headphones",price:"1499",img:"https://m.media-amazon.com/images/I/51he9pMSfZL._SX522_.jpg"},
{name:"Camera",price:"39999",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQtpr-VGlrXc9o2xrmZGEsdbMCo2xBNFRSSbWzPjDBJQ&s=10"},
{name:"Shoes",price:"2999",img:"https://redtape.com/cdn/shop/files/RSL1017_1.jpg?v=1768570510&width=1500"},
{name:"T-Shirt",price:"799",img:"https://m.media-amazon.com/images/I/61lsSUJhf0L._SY879_.jpg"},
{name:"Bag",price:"1299",img:"https://m.media-amazon.com/images/I/310vQM5BxuL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"Keyboard",price:"999",img:"https://m.media-amazon.com/images/I/6141jlI0EeL._SX522_.jpg"},
{name:"Mouse",price:"499",img:"https://m.media-amazon.com/images/I/41aMCc0XMiL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"TV",price:"45999",img:"https://m.media-amazon.com/images/I/71iKAFqYdgL._SX522_.jpg"},
{name:"Tablet",price:"18999",img:"https://m.media-amazon.com/images/I/71bBrftkB+L._SX522_.jpg"},
{name:"Speaker",price:"2499",img:"https://m.media-amazon.com/images/I/71t8okriQ6L._SX679_.jpg"},
{name:"Power Bank",price:"899",img:"https://m.media-amazon.com/images/I/41lFKFLbwiL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"Cycle",price:"7999",img:"https://m.media-amazon.com/images/I/4102EVdnEvL._SX300_SY300_QL70_FMwebp_.jpg"},
{name:"Chair",price:"4999",img:"https://m.media-amazon.com/images/I/41L0eKYe4qL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"Watch",price:"1999",img:"https://m.media-amazon.com/images/I/71IVibsCYYL._SY741_.jpg"},
{name:"Perfume",price:"999",img:"https://m.media-amazon.com/images/I/41NMnILMlfL._SY300_SX300_QL70_FMwebp_.jpg"},
{name:"Shoes Premium",price:"5999",img:"https://m.media-amazon.com/images/I/61aSGGKkSwL._SY695_.jpg"}
];


function display(data){

let box=document.getElementById("productList");

box.innerHTML="";

data.forEach(p=>{

box.innerHTML+=`

<div class="card">

<img src="${p.img}">

<h3>${p.name}</h3>

<p class="price">₹${p.price}</p>

<button>Add Cart</button>

</div>

`;

});

}

display(products);


document.getElementById("search")
.addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let filter=products.filter(p=>
p.name.toLowerCase().includes(value)
);

display(filter);

});


function toggleDark(){

document.body.classList.toggle("dark");

}