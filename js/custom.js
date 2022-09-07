// get input field value by id
const getInputFieldValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    inputField.value = '';
    return inputFieldValue;
}

// add product 
const addProduct = () => {
    const productName = getInputFieldValueById('product-field');
    const productQuantity = getInputFieldValueById('product-quantity');

    displayProduct(productName, productQuantity);
    saveProductToLS(productName, productQuantity)
}


// display product 
const displayProduct = (productName, productQuantity) => {
    const productContainer = document.getElementById('products-container');
    const li = document.createElement('li');
    li.innerText = `${productName} : ${productQuantity}`;

    productContainer.appendChild(li)
};

// get product from the local storage
const getProductFromLS = () => {
    const saveCart = localStorage.getItem('cart');
    let cart = {};
    if (saveCart) {
        cart = JSON.parse(saveCart);
    }
    return cart
}

// set product inside the local storage 
const saveProductToLS = (product, quantity) => {
    const cart = getProductFromLS();
    cart[product] = quantity;

    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

// display stroe(local storage) product
const displayStoreProduct = () => {
    const cart = getProductFromLS();
    for (let product in cart) {
        const quantity = cart[product];
        displayProduct(product, quantity)
    }
}

displayStoreProduct()

// getProductFromLS()

// addProduct()