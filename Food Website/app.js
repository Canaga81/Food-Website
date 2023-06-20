const navbarEl = document.querySelector(".navbar");
const searchFormEl = document.querySelector(".search-form");
const cartItemContainerEl = document.querySelector(".cart-item-container");

//! ------------------------------------------------------------------------

const barsBtnEl = document.getElementById("bars-btn");
const searchBtnEl = document.getElementById("search-btn");
const cartItemBtn = document.getElementById("cart-item-btn");

//! ------------------------------------------------------------------------

barsBtnEl.addEventListener("click", navbarCart);

function navbarCart() {
    navbarEl.classList.toggle("active");

    document.addEventListener("click", (e) => {
        if(!e.composedPath().includes(barsBtnEl) && !e.composedPath().includes(navbarEl)) {
            navbarEl.classList.remove("active");
        }
    });
}

//! ------------------------------------------------------------------------


searchBtnEl.addEventListener("click", searchCard);

function searchCard() {
    searchFormEl.classList.toggle("active");

    document.addEventListener("click", (e) => {
        if(!e.composedPath().includes(searchBtnEl) && !e.composedPath().includes(searchFormEl)) {
            searchFormEl.classList.remove("active");
        }
    });
}

//! ------------------------------------------------------------------------


cartItemBtn.addEventListener("click", cartItemCard);

function cartItemCard() {
    cartItemContainerEl.classList.toggle("active");

    document.addEventListener("click", (e) => {
        if(!e.composedPath().includes(cartItemBtn) && !e.composedPath().includes(cartItemContainerEl)) {
            cartItemContainerEl.classList.remove("active");
        }
    });
}

//! ------------------------------------------------------------------------