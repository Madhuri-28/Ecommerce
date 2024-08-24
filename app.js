fetch('https://fakestoreapi.com/products')
.then(data =>{
    //console.log(res);

    return data.json();

}).then((completedata)=>{
    let data1="";
    //console.log(completedata);
    completedata.map((values)=>{
        data1+=`<div class="card">
        <img src=${values.image} alt="img" class="images">
        <h2 class="producttitle">${values.title}</h2>
        <p class="productdes">${values.description}</p>
        <hr>
        <p class="price">&#x24 ${values.price}</p>
        <hr>
        <div class="productbuttons">
        <button class="probutton">Details</button>
        <button onclick="addtocart()" class="probutton">Add to cart</button>
        </div>
        </div>`;     
        
    });
    document.getElementById('cardcontainer').innerHTML=data1;



}).catch((err)=>{
    console.log(err);
})

