import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import Form from "../components/create-form.js";
import Home from "./home.js";
import Checkout from "./checkout.js";
import app from "../app.js";

export default class Create {
  constructor() {
    // add name for title
    document.getElementsByTagName("title")[0].innerHTML = "Create";
    // get current user
    this.$currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  initRender(container) {
    // add nav in page
    if (!document.getElementsByTagName("nav").length) {
      const nav = new Nav();
      nav.initRender(container);
    }

    const container_fluid = document.createElement("div");
    container_fluid.id = "create";

    const create_row = document.createElement("div");
    create_row.classList.add("row");

    const create_card = document.createElement("div");
    create_card.classList.add("col-sm-6");
    create_card.classList.add("mx-auto");
    create_card.classList.add("d-block");

    const card = document.createElement("div");
    card.classList.add("card");
    card.id = "create_form";
    card.style = "margin-top: 20px";

    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    const container_fluid1 = document.createElement("div");
    container_fluid1.id = "form-create";
    // add carousel object in div
    const form = new Form();
    form.initRender(container_fluid1);

    card_body.appendChild(container_fluid1);
    card.appendChild(card_body);
    create_card.appendChild(card);

    // total
    const card1 = document.createElement("div");
    card1.classList.add("card");
    card1.style = "margin-top: 20px";
    const card_body1 = document.createElement("div");
    card_body1.classList.add("card-body");
    const container_fluid2 = document.createElement("div");
    container_fluid2.id = "total";
    container_fluid2.innerHTML = `<h3>Total <span style="float: right">0</span></h3>`;

    card_body1.appendChild(container_fluid2);
    card1.appendChild(card_body1);
    create_card.appendChild(card1);

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

    //submit btn
    const submit_btn = document.createElement("button");
    submit_btn.classList.add("btn");
    submit_btn.classList.add("btn-primary");
    submit_btn.classList.add("btn-lg");
    submit_btn.classList.add("btn-block");
    submit_btn.type = "submit";
    submit_btn.style = "margin-top: 20px";
    submit_btn.innerText = "Go to checkout";
    submit_btn.addEventListener("click", this.gotoCheckout.bind(this));

    create_card.appendChild(submit_btn);
    create_card.appendChild(cancel_btn);

    create_row.appendChild(create_card);

    container.appendChild(create_row);

    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      const footer = new Footer();
      footer.initRender(container);
    }

    this.getTotal();
  }

  gotoCheckout() {
    clearInterval(this.$total);

    // get data for local storage - order

    const date = new Date();
    const order = {
      shipping: 0,
      total: document.getElementById("#total-span"),
      created_at: date,
      created_by: this.$currentUser.uid,
    };
    localStorage.setItem("order", JSON.stringify(order));

    const home = new Checkout();
    app.changeActiveScreen(home);
  }

  gotoHome() {
    clearInterval(this.$total);
    const home = new Home();
    app.changeActiveScreen(home);
  }

  getTotal() {
    // Get all radio buttons on the page
    const allRadioButtons = document.querySelectorAll('input[type="radio"]');
    this.$total = setInterval(() => {
      // Filter the checked radio buttons
      const checkedRadioButtons = Array.from(allRadioButtons).filter(
        (radio) => radio.checked
      );
      let sum = 0;
      if (checkedRadioButtons.length) {
        for (let index = 0; index < checkedRadioButtons.length; index++) {
          sum += 10;
        }
      }
      const container_fluid2 = document.getElementById("total");
      container_fluid2.innerHTML = `<h3>Total <span style="float: right"><span>$ </span> <span id="total-span">${sum}</span></span></h3>`;
    }, 1000);
  }
}
