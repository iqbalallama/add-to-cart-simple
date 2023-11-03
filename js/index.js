const products = [
    {
      "id": "9e7cda87-8160-458f-bd32-ecf253a2d86a",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1L",
      "seller": "Addidas",
      "price": 33,
      "stock": 7,
      "ratings": 4,
      "ratingsCount": 62,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a9c04ca9fa51408faf2fac8e0117abb9_9366/Steel_Metal_Bottle_1L_Black_EX7288_01_standard.jpg",
      "shipping": 15,
      "quantity": 0
    },
    {
      "id": "eaff8921-f7eb-446f-b072-d96559685de0",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1L",
      "seller": "Addidas",
      "price": 40,
      "stock": 14,
      "ratings": 5,
      "ratingsCount": 58,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c45df020e3ae4e9199a4ac7d0001cfb7_9366/Steel_Metal_Bottle_1L_White_EX7301_01_standard.jpg",
      "shipping": 17,
      "quantity": 0
    },
    {
      "id": "96fd22a5-f22f-4ad8-b7b5-f1cfd0852553",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1 L",
      "seller": "Addidas",
      "price": 46,
      "stock": 2,
      "ratings": 5,
      "ratingsCount": 73,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/c670a94f6388451a868fad440014460d_9366/Steel_Metal_Bottle_1_L_Purple_EY5529_01_standard.jpg",
      "shipping": 45,
      "quantity": 0
    },
    {
      "id": "e1a7c529-f91b-4ef5-a661-c2317c5c314e",
      "category": "Bottle",
      "name": "Steel Metal Bottle 1L",
      "seller": "Addidas",
      "price": 20,
      "stock": 14,
      "ratings": 5,
      "ratingsCount": 63,
      "img": "https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/3a76c66066dd4f1ca58caf9f00079432_9366/steel-metal-bottle-1l.jpg",
      "shipping": 21,
      "quantity": 0
    },
    {
      "id": "e912ad01-2551-48dc-a709-4054cbfbcbbc",
      "category": "Bottle",
      "name": "Steel Metal Bottle 600 ML",
      "seller": "Addidas",
      "price": 43,
      "stock": 19,
      "ratings": 4,
      "ratingsCount": 64,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/1105dc0c9232477eb80dac7d000edc0c_9366/Steel_Metal_Bottle_600_ML_White_EX7306_01_standard.jpg",
      "shipping": 43,
      "quantity": 0
    },
    {
      "id": "afc5d640-9943-437a-b644-ba1f6f12baa9",
      "category": "Bottle",
      "name": "Steel Straw Metal Bottle 600 ML",
      "seller": "Addidas",
      "price": 43,
      "stock": 10,
      "ratings": 3,
      "ratingsCount": 15,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f7fb63986ed34112bc57ac7d002c9f43_9366/Steel_Straw_Metal_Bottle_600_ML_White_EX7316_01_standard.jpg",
      "shipping": 46,
      "quantity": 0
    },
    {
      "id": "5b5c43d9-950d-4b9a-b7d9-ca489224a7b2",
      "category": "Bottle",
      "name": "Steel Metal Bottle 600 ML",
      "seller": "Addidas",
      "price": 26,
      "stock": 20,
      "ratings": 5,
      "ratingsCount": 83,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e2d870a680644e4d98e9ac7d0008ecc7_9366/Steel_Metal_Bottle_600_ML_Yellow_EX7307_01_standard.jpg",
      "shipping": 6,
      "quantity": 0
    },
    {
      "id": "96239c09-8b1c-4c81-99f9-f43e7613eab3",
      "category": "Bottle",
      "name": "Squad Glass Bottle 720 ML",
      "seller": "Addidas",
      "price": 39,
      "stock": 20,
      "ratings": 3,
      "ratingsCount": 1,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/77ad16764abf4e828560ad44001cd640_9366/Squad_Glass_Bottle_720_ML_Black_FZ7115_01_standard.jpg",
      "shipping": 5,
      "quantity": 0
    },
    {
      "id": "30698483-f7aa-49ba-9de9-9070f64dc263",
      "category": "Bottle",
      "name": "Steel Bottle 600 ML",
      "seller": "Addidas",
      "price": 23,
      "stock": 11,
      "ratings": 5,
      "ratingsCount": 35,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/48057b65216644f683a9aa1c0172ae6e_9366/Steel_Bottle_600_ML_Black_CL6093_01_standard.jpg",
      "shipping": 5,
      "quantity": 0
    },
    {
      "id": "02871edc-272b-4e20-bcc2-b32681213b3c",
      "category": "Bottle",
      "name": "Steel Metal Bottle 2L",
      "seller": "Addidas",
      "price": 37,
      "stock": 14,
      "ratings": 4,
      "ratingsCount": 68,
      "img": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/f8d89293c9cb4bf08d52adb100f95a3a_9366/Steel_Metal_Bottle_2L_Black_EX7302_01_standard.jpg",
      "shipping": 27,
      "quantity": 0
    }
  ];
  const container = document.getElementById('container');
  const productM = products.map(p =>{
    const div = document.createElement('div');
    div.classList.add('product')
    div.innerHTML = `
        <h3>${p.name}</h3>
        <img src='${p.img}'>
        <p> $${p.price}</p>
        <button  onclick="add('${p.id}')">Add To Cart</button>
    `
    container.appendChild(div)
    
    
  })
  function add(pr){
    const cart = [];
    const cartC = document.getElementById('cart');
    const productSM = products.map( p => {
        if(p.id == pr){
            cart.push(p)
        }
    }) 
    cart.map(d => {
        const div = document.createElement('div');
        div.classList.add('cartD')
        div.innerHTML = `
            <img src=${d.img}>
            <p>${d.name.slice(0,15)}</p>
            <button class='remove'>Delete</button>
        `
        cartC.appendChild(div)
        const re = document.getElementsByClassName('remove');
        for(const r of re){
            r.onclick = function (){
                this.parentNode.remove()
            }
        }
    })
} 