const menu = [
    {
        name: "Paneer Butter Masala",
        category: "veg",
        price: "₹250",
        img: "pexels-snappr-29850004.jpg"
    },
    {
        name: "Chicken Biryani",
        category: "nonveg",
        price: "₹300",
        img: "istockphoto-1410130688-1024x1024.jpg"
    },
    {
        name: "Veg Burger",
        category: "veg",
        price: "₹120",
        img: "a5fe9407-5dc3-44cd-b822-97e9bdb6d0ee.jpg"
    },
    {
        name: "Cold Coffee",
        category: "drinks",
        price: "₹90",
        img: "chocolate-smoothie.jpg"
    }
];

function displayMenu(items) {
    const container = document.getElementById("menu-container");
    container.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("menu-item");

        div.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;

        container.appendChild(div);
    });
}

function filterMenu(category) {
    if (category === "all") {
        displayMenu(menu);
    } else {
        const filtered = menu.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

// Load all items initially
displayMenu(menu);