const products = [
    {
        id: "1",
        title : "Bichitos",
        text: "Mi pequeño libro de bichitos",
        price: 20000,
        img: "/src/assets/img1.png",
        stock: 5,
        category: "infantil"
    }, 
     {
        id: "2",
        title : "Diccionario popular de la Biblia",
        text: "El mejor diccionario",
        price: 10000,
        img: "/src/assets/img2.png",
        stock: 55,
        category: "religión"
    }, 
     {
        id: "3",
        title : "Green books",
        text: "Herboristeria",
        price: 25000,
        img: "/src/assets/img3.png",
        stock: 15,
        category: "Botánica",
    },     
]

function getProducts(){
    return new Promise( (resolve, reject) => {  
    setTimeout( () => {
      resolve(products)
    }, 3000)
  })
}

export default getProducts;