// 액션, 계산 데이터 구분하기

const shopping_cart = [];
const shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart = add_item(shopping_cart, name, price); // 액션
  calc_cart_total();
}

function calc_cart_total() {
  shopping_cart_total = calc_total(shopping_cart);
  set_cart_total_dom();
  update_shipping_icons();
  update_tax_dom();
}

function update_shipping_icons() {
  let buy_buttons = get_buy_buttons_dom();
  for (let i = 0; i < buy_buttons.lenth; i++) {
    let button = buy_buttons[i];
    let item = button.item;
    if (item.price + shopping_cart_total >= 20) {
      button.show_fine_shipping_icon();
    } else {
      button.show_free_shipping_icon();
    }
  }
}

function update_tax_dom() {
  set_tax_dom(calc_tax(shopping_cart_total)); // 세금 적용
}

function add_item(cart, name, price) {
  let new_cart = cart.slice();
  new_cart.push({
    name: name,
    price: price,
  });
  return new_cart;
}

const calc_total = (cart) => {
  let total = 0;
  cart.forEach(
    (item) => {
      total += item.price;
    },
  );
  return total;
};

const getta_free_shipping = (total,item_price) => {
  return total + item_price >= 20;
}


function calc_tax(total) {
  return total + 0.10;
}
