function avg(data){
    
    let totalPrice = 0;
    const values = Object.values(data);
    const size = values[0];
    const productsList = values[1];

    productsList.forEach(product => {
        totalPrice += product['price'];
    });

    return totalPrice/size;

}

console.log(
    avg({
    size:3,
    products:[
    {
    name:"Product 1",
    price:100
    },
    {
    name:"Product 2",
    price:700
    },
    {
    name:"Product 3",
    price:250
    }
    ]
    })
    ) // should print the average price of all products