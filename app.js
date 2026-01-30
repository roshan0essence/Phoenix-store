const products=[
{id:1,name:'Classic Hoodie',price:40,category:'hoodie',img:'https://images.unsplash.com/photo-1520975916090-3105956dac38'},
{id:2,name:'Urban Hoodie',price:45,category:'hoodie',img:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'},
{id:3,name:'Graphic T-Shirt',price:25,category:'tshirt',img:'https://images.unsplash.com/photo-1523381210434-271e8be1f52b'},
{id:4,name:'Minimal Tee',price:22,category:'tshirt',img:'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c'},
{id:5,name:'Jogger Pants',price:38,category:'pants',img:'https://images.unsplash.com/photo-1512436991641-6745cdb1723f'},
{id:6,name:'Cargo Pants',price:42,category:'pants',img:'https://images.unsplash.com/photo-1542060748-10c28b62716c'},
{id:7,name:'Street Sneakers',price:65,category:'shoes',img:'https://images.unsplash.com/photo-1542291026-7eec264c27ff'},
{id:8,name:'White Sneakers',price:60,category:'shoes',img:'https://images.unsplash.com/photo-1528701800489-20be7c51d49e'},
{id:9,name:'Wool Scarf',price:18,category:'accessory',img:'https://images.unsplash.com/photo-1516822003754-cca485356ecb'},
{id:10,name:'Leather Belt',price:20,category:'accessory',img:'https://images.unsplash.com/photo-1585386959984-a41552231693'}
];

const list=document.getElementById('productList');
if(list){
  products.forEach(p=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<img src="${p.img}"><h3>${p.name}</h3><div class='price'>$${p.price}</div>`;
    card.onclick=()=>location.href=`product.html?id=${p.id}`;
    list.appendChild(card);
  });
}

const params=new URLSearchParams(window.location.search);
const id=params.get('id');
const page=document.getElementById('productPage');
const similar=document.getElementById('similarProducts');

if(page && id){
  const product=products.find(p=>p.id==id);
  page.innerHTML=`<img src="${product.img}"><h2>${product.name}</h2><p>Price: $${product.price}</p><button>Add to Cart</button>`;
  products.filter(p=>p.category===product.category && p.id!=id).forEach(p=>{
    const card=document.createElement('div');
    card.className='card';
    card.innerHTML=`<img src="${p.img}"><h3>${p.name}</h3><div class='price'>$${p.price}</div>`;
    card.onclick=()=>location.href=`product.html?id=${p.id}`;
    similar.appendChild(card);
  });
}
