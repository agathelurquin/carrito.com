// const fs = require("fs");
const axios = require('axios');

const options = {
    method: "GET",
    url: "https://asos2.p.rapidapi.com/products/v2/list",
    params: {
      store: "US",
      offset: "0",
      categoryId: "4209",
      limit: "48",
      country: "US",
      sort: "freshness",
      currency: "USD",
      sizeSchema: "US",
      lang: "en-US"
      },

  headers: {
    'X-RapidAPI-Key': 'bdd4c56bd0msh5ac19ce8144a7e8p1576e4jsn3d167a62e657',
    'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
  }
};


const dataProducts = []
const dataClean = []

async function dataFetch() {
    
    try {
        const response = await axios.request(options);
        console.log(response.data.products[0].price)
        return response.data.products
    } catch (error) {
        console.error(error);
    }
}

// dataFetch()

async function getFinalList() {
    for (let i = 0; i < 2; i++) {
        options.params.offset = i 
        const fetchedList = await dataFetch()
        // console.log(fetchedList.length) 
        dataProducts.push(...fetchedList)
    }
    cleanData()
    // console.log(dataProducts)  
}

getFinalList()



function cleanData () {

    for(let i= 0;i < dataProducts.length; i++){
        const product = dataProducts[i]
        const newData = {
            id: product.id,
            name: product.name,
            colour: product.colour,
            brandName: product.brandName,
            url: product.url,
            image: product.imageUrl,
        }
    
        dataClean.push(newData)
    }
    console.log(dataClean)
   
}

    
    


