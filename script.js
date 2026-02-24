// رقم واتساب
const whatsappNumber = "0684686562";

const products = [
  { name: "ملصق أنمي 1", price: 15, image: "img/sticker1.jpg" },
  { name: "ملصق أنمي 2", price: 15, image: "img/sticker2.jpg" },
  { name: "ملصق أنمي 3", price: 15, image: "img/sticker3.jpg" },
  { name: "ملصق أنمي 4", price: 15, image: "img/sticker4.jpg" },
  { name: "ملصق أنمي 5", price: 15, image: "img/sticker5.jpg" },
  { name: "ملصق أنمي 6", price: 15, image: "img/sticker6.jpg" } // مثال إضافة
];

const productsContainer = document.getElementById("products");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const orderBtn = document.getElementById("order-btn");

let cart = [];

// عرض المنتجات
products.forEach((product, index) => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>${product.price} درهم</p>
  `;
  div.addEventListener("click", () => addToCart(index));
  productsContainer.appendChild(div);
});

// إضافة للسلة
function addToCart(index) {
  cart.push(products[index]);
  updateCart();
}

// تحديث السلة
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} درهم`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalEl.textContent = total;
}

// طلب عبر واتساب
orderBtn.addEventListener("click", () => {
  if(cart.length === 0){
    alert("السلة فارغة!");
    return;
  }

  let message = "طلب جديد:%0A";
  cart.forEach(item => {
    message += `- ${item.name} : ${item.price} درهم%0A`;
  });
  message += `المجموع: ${cart.reduce((a,b)=>a+b.price,0)} درهم`;

  window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
});
