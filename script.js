
const products = [
    { id: 1, name: "Tapis de Yoga", price: 29.99, image: "tapis_yoga.jpg" },
    { id: 2, name: "Rouleau de Massage", price: 19.99, image: "rouleau_massage.jpg" },
    { id: 3, name: "Montre Connectée", price: 99.99, image: "montre_connectee.jpg" }
];

const cart = [];

function loadProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="\${product.image}" alt="\${product.name}">
            <h3>\${product.name}</h3>
            <p>\${product.price} €</p>
            <button onclick="addToCart(\${product.id})">Ajouter au panier</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    alert("\${product.name} a été ajouté au panier.");
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.textContent = `\${item.name} - \${item.price} €`;
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Supprimer";
        removeBtn.onclick = () => {
            cart.splice(index, 1);
            updateCart();
        };
        cartItem.appendChild(removeBtn);
        cartItems.appendChild(cartItem);
    });
}

document.getElementById('checkout-btn').onclick = () => {
    alert("Système de paiement à intégrer.");
};

loadProducts();
