// 액션, 계산 데이터 구분하기
//

const shopping_cart = [];
const shopping_cart_total = 0;

function add_item_to_cart(name, price) {
  shopping_cart.push({
    name: name,
    price: price,
  });

  calc_cart_total();
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
  set_tax_dom(shopping_cart_total + 0.10); // 세금 적용
}

function calc_cart_total() {
  shopping_cart_total = 0; //  전역변수를 바꾸는 것은 액션이다.
  shopping_cart.forEach((item) => {
    shopping_cart_total += item.price;
  });
  set_cart_total_dom(shopping_cart_total);
  update_shipping_icons();
  update_tax_dom();
}
