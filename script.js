// تحميل المنتجات من JSON
fetch("products.json")
    .then(response => response.json())
    .then(products => {
        let productsContainer = document.getElementById("products-list");
        products.forEach(product => {
            let productElement = document.createElement("div");
            productElement.className = "product";
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p class="price">${product.price} ريال</p>
            `;
            productsContainer.appendChild(productElement);
        });
    })
    .catch(error => console.error("Error loading products:", error));

// تحميل رابط الديسكورد من JSON
fetch("config.json")
    .then(response => response.json())
    .then(config => {
        document.getElementById("discord-link").href = config.discord;
    })
    .catch(error => console.error("Error loading config:", error));
