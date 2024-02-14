import app from "../app.js";
import Home from "./home.js";

export default class Checkout {
  constructor() {
    document.getElementsByTagName(
      "head"
    )[0].innerHTML = ` <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Checkout</title>
    <!-- cdn for plugins and extensions -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- icon branding -->
  <link rel="shortcut icon" href="pictures/Untitled2.png">
`;
  }

  async initRender(container) {
    let container_checkout = document.createElement("div");
    container_checkout.classList.add("container");
    container_checkout.id = "checkout";
    container_checkout.style = "margin-bottom: 20px;";
    container_checkout.innerHTML += `<h2>Checkout form</h2>`;

    const row = document.createElement("div");
    row.classList.add("row");
    row.id = "cart";

    // cart
    let col1 = document.createElement("div");
    col1.classList.add("col-md-4");
    col1.classList.add("order-md-2");
    col1.classList.add("mb-4");
    col1.innerHTML += ` <h4 class="d-flex justify-content-between align-items-center mb-3">
    <span class="text-muted">Your cart</span> </h4>`;

    // item list
    const ul = document.createElement("ul");
    ul.classList.add("list-group");
    ul.classList.add("mb-3");

    // call function to get items
    await this.getItems();

    console.log(this.$itemsOrder);

    this.$itemsOrder.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.classList.add("d-flex");
      li.classList.add("justify-content-between");
      li.classList.add("lh-condensed");

      const div_details = document.createElement("div");
      const item_name = document.createElement("h6");
      item_name.classList.add("my-0");
      item_name.innerText = element.name;
      div_details.appendChild(item_name);

      const item_des = document.createElement("small");
      item_des.classList.add("text-muted");
      item_des.innerText = element.des;
      div_details.appendChild(item_des);

      li.appendChild(div_details);

      const item_price = document.createElement("span");
      item_price.classList.add("text-muted");
      item_price.innerText = "$" + element.price;
      li.appendChild(item_price);

      ul.appendChild(li);
    });

    // add total li in ul
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");

    const item_title = document.createElement("span");
    item_title.innerText = "Total (USD)";
    li.appendChild(item_title);

    const item_price = document.createElement("strong");
    item_price.innerText =
      "$" + this.$itemsOrder.reduce((sum, a) => sum + a.price, 0);
    li.appendChild(item_price);
    ul.appendChild(li);
    col1.appendChild(ul);

    // form discount
    const discount_form = `<form class="card p-2">
    <div class="input-group">
      <input
        type="text"
        class="form-control"
        placeholder="Promo code"
      />
      <div class="input-group-append">
        <button type="submit" class="btn btn-secondary">Redeem</button>
      </div>
    </div>
  </form>`;
    col1.innerHTML += discount_form;
    row.appendChild(col1);

    // checkout
    let col2 = document.createElement("div");
    col2.classList.add("col-md-8");
    col2.classList.add("order-md-1");
    //title
    col2.innerHTML += `<h4 class="mb-3">Billing address</h4>`;
    // form
    let checkout_form = document.createElement("form");
    checkout_form.classList.add("needs-validation");
    checkout_form.noValidate = true;

    //full name
    const fullName = `<div class="row">
    <div class="col-md-6 mb-3">
      <label for="firstName">First name</label>
      <input
        type="text"
        class="form-control"
        id="firstName"
        placeholder=""
        value=""
        required
      />
      <div class="invalid-feedback">
        Valid first name is required.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="lastName">Last name</label>
      <input
        type="text"
        class="form-control"
        id="lastName"
        placeholder=""
        value=""
        required
      />
      <div class="invalid-feedback">Valid last name is required.</div>
    </div>
  </div>`;
    checkout_form.innerHTML += fullName;

    //username
    const username = `<div class="mb-3">
    <label for="username">Username</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">@</span>
      </div>
      <input
        type="text"
        class="form-control"
        id="username"
        placeholder="Username"
        required
      />
      <div class="invalid-feedback" style="width: 100%">
        Your username is required.
      </div>
    </div>
  </div>`;
    checkout_form.innerHTML += username;

    //email
    const email = `<div class="mb-3">
    <label for="email"
      >Email <span class="text-muted">(Optional)</span></label
    >
    <input
      type="email"
      class="form-control"
      id="email"
      placeholder="you@example.com"
    />
    <div class="invalid-feedback">
      Please enter a valid email address for shipping updates.
    </div>
  </div>`;
    checkout_form.innerHTML += email;
    // phone
    const phone = `<div class="mb-3">
    <label for="phone">phone number</label>
    <input
      type="number"
      class="form-control"
      id="phone"
      placeholder="you@example.com"
    />
    <div class="invalid-feedback">
      Please enter a valid phone number for shipping updates.
    </div>
  </div>`;
    checkout_form.innerHTML += phone;

    //location
    const location = `<div class="row">
    <div class="col-md-5 mb-3">
      <label for="country">Country</label>
      <select
        class="custom-select d-block w-100"
        id="country"
        required
      >
        <option value="">Choose...</option>
        <option>United States</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid country.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="state">State</label>
      <select class="custom-select d-block w-100" id="state" required>
        <option value="">Choose...</option>
        <option>California</option>
      </select>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="zip">Zip</label>
      <input
        type="text"
        class="form-control"
        id="zip"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Zip code required.</div>
    </div>
  </div>`;
    checkout_form.innerHTML += location;

    // address
    const address = `<div class="mb-3">
    <label for="address">Address</label>
    <input
      type="text"
      class="form-control"
      id="address"
      placeholder="1234 Main St"
      required
    />
    <div class="invalid-feedback">
      Please enter your shipping address.
    </div>
  </div>`;
    checkout_form.innerHTML += address;

    // line
    checkout_form.innerHTML += `<hr class="mb-4" />`;
    // payment
    checkout_form.innerHTML += `<h4 class="mb-3">Payment</h4>`;

    let paymentMethods = document.createElement("div");
    paymentMethods.classList.add("d-block");
    paymentMethods.classList.add("my-3");

    const debit = ` <div class="custom-control custom-radio">
    <input
      id="debit"
      name="paymentMethod"
      type="radio"
      class="custom-control-input"
      checked
      required
    />
    <label class="custom-control-label" for="debit">cod</label>
  </div>`;
    paymentMethods.innerHTML += debit;

    const credit = `<div class="custom-control custom-radio">
    <input
      id="credit"
      name="paymentMethod"
      type="radio"
      class="custom-control-input"
      required
    />
    <label class="custom-control-label" for="credit"
      >Credit card</label
    >
  </div>`;
    paymentMethods.innerHTML += credit;

    const credit_form = `<div class="row">
    <div class="col-md-6 mb-3">
      <label for="cc-name">Name on card</label>
      <input
        type="text"
        class="form-control"
        id="cc-name"
        placeholder=""
        required
      />
      <small class="text-muted">Full name as displayed on card</small>
      <div class="invalid-feedback">Name on card is required</div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="cc-number">Credit card number</label>
      <input
        type="text"
        class="form-control"
        id="cc-number"
        placeholder=""
        required
      />
      <div class="invalid-feedback">
        Credit card number is required
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-3 mb-3">
      <label for="cc-expiration">Expiration</label>
      <input
        type="text"
        class="form-control"
        id="cc-expiration"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Expiration date required</div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="cc-cvv">CVV</label>
      <input
        type="text"
        class="form-control"
        id="cc-cvv"
        placeholder=""
        required
      />
      <div class="invalid-feedback">Security code required</div>
    </div>
  </div>`;
    paymentMethods.innerHTML += credit_form;
    checkout_form.appendChild(paymentMethods);

    // line
    checkout_form.innerHTML += `<hr class="mb-4" />`;

    // cancel
    const cancel_btn = document.createElement("button");
    cancel_btn.classList.add("btn");
    cancel_btn.classList.add("btn-secondary");
    cancel_btn.classList.add("btn-lg");
    cancel_btn.classList.add("btn-block");
    cancel_btn.type = "reset";
    cancel_btn.innerText = "Cancel";
    cancel_btn.style = "margin-right: 15px";
    cancel_btn.addEventListener("click", this.gotoHome.bind(this));
    checkout_form.appendChild(cancel_btn);

    //submit btn
    const submit_btn = document.createElement("button");
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.classList.add("btn-lg");
    submit_btn.classList.add("btn-block");
    submit_btn.type = "submit";
    submit_btn.innerText = "Checkout";
    submit_btn.addEventListener("click", this.order.bind(this));
    checkout_form.appendChild(submit_btn);

    col2.appendChild(checkout_form);
    row.appendChild(col2);
    //add in container
    container_checkout.appendChild(row);
    container.appendChild(container_checkout);
  }

  async getItems() {
    let list = [
      { name: "Product name", des: "Brief description", price: 12 },
      { name: "Product name", des: "Brief description", price: 12 },
      { name: "Product name", des: "Brief description", price: 12 },
    ];

    // get list from local storage
    this.$itemsOrder = await list;
  }

  gotoHome() {
    const home = new Home();
    app.changeActiveScreen(home);
  }

  order() {
    //validate form
    //create order on firestore
  }

  getPaymentMethod() {}
}
