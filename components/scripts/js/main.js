import producCard from "../modules/productCard.js";

console.log("hello")
const productsCards = document.getElementById("products-cards")

for (let i = 0; i < 4; i++) {
    producCard( productsCards, "Macadamia", "5.60")
}
