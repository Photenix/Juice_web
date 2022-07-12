let producCard = ( container, jugo, ml, precio ) => {
    container.innerHTML +=
    `<div class="card-product">
        <img src="./assets/basil_seed_with_mango__flavor_250ml_glass_bottle_17e76d08f5a04710708bffddcab33a44-removebg-preview 1.png" alt="">
        <footer>
            <div class="text-card">
                <h2>${jugo}</h2>
                <h3>${ml}</h3>
            </div>
            <div class="price-add">
                <h2>$${precio}</h2>
                <h3>Add to cart</h3>
            </div>
        </footer>
    </div>`
}

export default producCard;