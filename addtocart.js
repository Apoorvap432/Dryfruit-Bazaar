const product = [{
        id: 0,
        Image: 'products/images/1Afganiraisins.webp',
        title: 'Afgani Raisins',
        price: 120
    },
    {
        id: 1,
        Image: 'products/images/1BlackRaisins.webp',
        title: 'Afgani Black Raisins',
        price: 120
    },
    {
        id: 2,
        Image: 'products/images/1premium green raisins.webp',
        title: 'Premium Green Raisins',
        price: 120
    },
    {
        id: 3,
        Image: 'products/images/1premiumseedless.webp',
        title: 'Afgani Raisins',
        price: 120
    }
];
const categories = [...new Set(product.map((item) => { return item }))]
let i = 0;
document.getElementById('root').innerHTML = categories.map((item) => {
    var { image, title, price } = item;
    return (
        `<div class="box">
            <div class="img-box">
                <img class='images' src=${image}></img>
            </div>
            <div class="bottom">
                <p>${title}</p>
                <h2>$ ${price}.00</h2>` +
        "<button onclick='addtocart(" + (i++) + ")'  >Add to Cart</button>" +
        `</div> 
        </div>`
    )
}).join('')

var cart = [];

function displaycart(a) {
    let j = 0;
    if (cart.length == 0) {
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
    } else {
        document.getElementById("cartItem").innerHTML = cart.map((items) => {
                    var { image, title, price } = items;
                    return (
                            `<div class='cart-item'>
                    <div class = 'row-img'>
                        <img class='rowing' src= ${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                </div>
            )
        })
    }
}