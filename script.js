/*

const apiURL = "https://fakestoreapi.com/products/";

const getProduct = (url) => {
    fetch(url)
    .then(res=>res.json())
    .then(json=>console.log(json))
}

getProduct(apiURL);

*/

const productContainer = document.getElementById('products-list');

document.addEventListener("DOMContentLoaded", function() {

    const apiURL = "https://fakestoreapi.com/products/";

    // function to fetch the products
    async function fetchProduct(){
        try{
            const response = await fetch(apiURL);
            const data = await response.json();
            displayProducts(data);
        } catch(err){
            console.log("Error occured while fetching products: ", err);
        }
    };

    // function to display the fetched products
    function displayProducts(products) {
        
        // console.log(products[0]);

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const productImage = document.createElement("img");
            productImage.src = product.image;
            productImage.alt = product.title;

            const productTitle = document.createElement("h2");
            productTitle.textContent = product.title;

            const productPrice = document.createElement("p");
            productPrice.textContent = "Price: $" + product.price;

            const productRating = document.createElement("p");
            productRating.textContent = "Rating: " + product.rating.rate;

            const addToCartButton = document.createElement('button');
            addToCartButton.textContent = "Add To Cart";


            productCard.appendChild(productImage);
            productCard.appendChild(productTitle);
            productCard.appendChild(productPrice);
            productCard.appendChild(productRating);
            productCard.appendChild(addToCartButton);

            productContainer.appendChild(productCard);
        });
    }

    fetchProduct();

});