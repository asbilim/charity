import axios from "axios";
import { decrypt, encrypt } from "../functions/crypto";
import { GetUsers } from "./user";
const Backend_url = process.env.NEXT_PUBLIC_BACKEND_URL;


export const AddProduct = (product) => {
  let productCurrent = JSON.parse(localStorage.getItem("cart"));
  const productSaved = encrypt({
    product: product,
    quantity: 1,
  });

  if (productCurrent) {
    productCurrent.push(productSaved);
    localStorage.setItem("cart", JSON.stringify(productCurrent));
  } else {
    productCurrent = [];
    productCurrent.push(productSaved);
    localStorage.setItem("cart", JSON.stringify(productCurrent));
  }
};

export const Decrypt_cart = (productCurrent) => {
  let card = [];
  if (productCurrent) {
    for (let i = 0; i < productCurrent.length; i++) {
      const decrypted = decrypt(productCurrent[i]);
      card.push(decrypted);
    }
  }

  return card;
};

export const Ecrypt_cart = (productCurrent) => {
  let card = [];
  if (productCurrent) {
    for (let i = 0; i < productCurrent.length; i++) {
      const ecrypted = encrypt(productCurrent[i]);
      card.push(ecrypted);
    }
  }

  return card;
};

export const DeleteProduct = (productId) => {
  let productCurrent = JSON.parse(localStorage.getItem("cart"));
  let productSaved = Decrypt_cart(productCurrent);

  if (productCurrent && productSaved) {
    const productLeft = productSaved.filter(
      (product) => product.product._id !== productId
    );
    const toSave = [];
    for (let i = 0; i < productLeft.length; i++) {
      const encrypted = encrypt(productLeft[i]);
      toSave.push(encrypted);
    }
    localStorage.setItem("cart", JSON.stringify(toSave));
  }
};

export const Total = (cart) => {
  const currentCard = JSON.parse(localStorage.getItem("cart"));
  const decripted = Decrypt_cart(currentCard);
  let total = 0;
  if (currentCard && decripted) {
    total = decripted.reduce((a, b) => a + b.product.price * b.quantity, 0);
  }

  return total;
};

export const DeliveryPrice = (cart) => {
  const currentCard = JSON.parse(localStorage.getItem("cart"));
  const decripted = Decrypt_cart(currentCard);
  let deliv = 0;
  if (currentCard && decripted) {
    const prices = [];
    for (let i = 0; i < decripted.length; i++) {
      prices.push(decripted[i].product.delivery);
    }
    deliv = Math.max(...prices);
  }

  return deliv;
};

export const AddQuantity = (id) => {
  const currentCard = JSON.parse(localStorage.getItem("cart"));
  const decripted = Decrypt_cart(currentCard);
  let quantity = 0;
  if (currentCard && decripted) {
    const product = decripted.filter((product) => product.product._id === id);
    quantity = product[0].quantity + 1;
    decripted[decripted.findIndex((product) => product.product._id === id)] = {
      product: product[0].product,
      quantity: quantity,
    };
  }

  const cart = Ecrypt_cart(decripted);

  localStorage.setItem("cart", JSON.stringify(cart));
  return quantity;
};

export const reduceQuantity = (id) => {
  const currentCard = JSON.parse(localStorage.getItem("cart"));
  const decripted = Decrypt_cart(currentCard);
  let quantity = 0;
  if (currentCard && decripted) {
    const product = decripted.filter((product) => product.product._id === id);
    quantity = product[0].quantity - 1;
    decripted[decripted.findIndex((product) => product.product._id === id)] = {
      product: product[0].product,
      quantity: quantity,
    };
  }

  const cart = Ecrypt_cart(decripted);

  localStorage.setItem("cart", JSON.stringify(cart));
  return quantity;
};


export const Like = async (productId) => {
  const user = await GetUsers()
  await axios.put(`${Backend_url}/product/like/${productId}`,{
   userId: user._id
  });
}

export const getStared = async () => {
  const user = await GetUsers()
  const liked = await axios.get(`${Backend_url}/product/stared/${user._id}`);

  return liked.data;  
}