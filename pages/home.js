import app from "../app.js";
import Carousel from "../components/carousel.js";
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";
import Login from "./login.js";
import Gallery from "./gallery.js";
import Create from "./create.js";

export default class Home {
  constructor() {
    // add name for title
    document.getElementsByTagName("title")[0].innerHTML = "App";
  }
  initRender(container) {
    // add nav in page
    if (!document.getElementsByTagName("nav").length) {
      const nav = new Nav();
      nav.initRender(container);
    }

    // carousel
    const container_fluid = document.createElement("div");
    container_fluid.id = "home-carousel";
    // add carousel object in div
    const carousel = new Carousel();
    carousel.initRender(container_fluid);
    // add carousel in container
    container.appendChild(container_fluid);

    // index cards
    const index_cards = document.createElement("div");
    index_cards.id = "index-cards";
    index_cards.classList.add("container");

    // first row (cards)
    const row1 = document.createElement("div");
    row1.classList.add("row");
    row1.style = "margin-top: 5vh;";

    //card1
    const col1 = document.createElement("div");
    col1.classList.add("col-sm-4");

    let card_login = document.createElement("div");
    card_login.classList.add("card");
    card_login.classList.add("card-history");
    card_login.innerHTML += `<img
        class="card-img-top"
        src="assets/img/photo-2-2608-1579608136.jpg"
        alt="Card image"
      />`;

    const card_details = document.createElement("div");
    card_details.classList.add("card-img-overlay");
    card_details.classList.add("card-overlay");

    const card_title = document.createElement("h4");
    card_title.classList.add("card-title");
    card_title.innerText = "Login";

    const card_text = document.createElement("p");
    card_text.classList.add("card-text");
    card_text.innerText = "Some example text";

    const card_btn = document.createElement("a");
    card_btn.classList.add("btn");
    card_btn.classList.add("btn-card");
    card_btn.id = "card_btn";
    card_btn.href = "#";
    // card_btn.innerText = "learn more";
    card_btn.addEventListener("click", this.checkLogin);

    card_details.appendChild(card_title);
    card_details.appendChild(card_text);
    card_details.appendChild(card_btn);

    card_login.appendChild(card_details);
    col1.appendChild(card_login);
    row1.appendChild(col1);

    //card2
    const col2 = document.createElement("div");
    col2.classList.add("col-sm-4");

    let card_gallery = document.createElement("div");
    card_gallery.classList.add("card");
    card_gallery.classList.add("card-history");
    card_gallery.innerHTML += `<img
        class="card-img-top"
        src="assets/img/photo-2-2608-1579608136.jpg"
        alt="Card image"
      />`;

    const card_details_2 = document.createElement("div");
    card_details_2.classList.add("card-img-overlay");
    card_details_2.classList.add("card-overlay");

    const card_title_2 = document.createElement("h4");
    card_title_2.classList.add("card-title");
    card_title_2.innerText = "Gallery";

    const card_text_2 = document.createElement("p");
    card_text_2.classList.add("card-text");
    card_text_2.innerText = "Some example text";

    const card_btn_2 = document.createElement("a");
    card_btn_2.classList.add("btn");
    card_btn_2.classList.add("btn-card");
    card_btn_2.href = "#";
    card_btn_2.innerText = "take a look";
    card_btn_2.addEventListener("click", this.gotoGallery.bind(this));

    card_details_2.appendChild(card_title_2);
    card_details_2.appendChild(card_text_2);
    card_details_2.appendChild(card_btn_2);

    card_gallery.appendChild(card_details_2);
    col2.appendChild(card_gallery);
    row1.appendChild(col2);

    //card3
    const col3 = document.createElement("div");
    col3.classList.add("col-sm-4");

    let card_create = document.createElement("div");
    card_create.classList.add("card");
    card_create.classList.add("card-history");
    card_create.innerHTML += `<img
        class="card-img-top"
        src="assets/img/photo-2-2608-1579608136.jpg"
        alt="Card image"
      />`;

    const card_details_3 = document.createElement("div");
    card_details_3.classList.add("card-img-overlay");
    card_details_3.classList.add("card-overlay");

    const card_title_3 = document.createElement("h4");
    card_title_3.classList.add("card-title");
    card_title_3.innerText = "Create";

    const card_text_3 = document.createElement("p");
    card_text_3.classList.add("card-text");
    card_text_3.innerText = "Some example text";

    const card_btn_3 = document.createElement("a");
    card_btn_3.classList.add("btn");
    card_btn_3.classList.add("btn-card");
    card_btn_3.href = "#";
    card_btn_3.innerText = "start designing";
    card_btn_3.addEventListener("click", this.gotoCreate);

    card_details_3.appendChild(card_title_3);
    card_details_3.appendChild(card_text_3);
    card_details_3.appendChild(card_btn_3);

    card_create.appendChild(card_details_3);
    col3.appendChild(card_create);
    row1.appendChild(col3);

    container.appendChild(row1);

    // second row (intro)
    const row2 = document.createElement("div");
    row2.classList.add("row");
    row2.classList.add("card-intro");

    const intro = document.createElement("p");
    intro.innerText =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores sequi repellat, quis atque alias fugit recusandae. At, facere, itaque ea sunt ipsum voluptatibus eveniet eligendi totam, quis officia accusantium placeat.";

    row2.appendChild(intro);
    container.appendChild(row2);

    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      const footer = new Footer();
      footer.initRender(container);
    }

    this.checkLogin();
  }

  // goto other pages
  checkLogin() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const login_btn = document.querySelector("#card_btn");

    if (currentUser) {
      login_btn.innerText = "You signed in";
    } else {
      login_btn.innerText = "Login";
      login_btn.addEventListener("click", this.gotoLogin);
    }
  }

  gotoLogin() {
    const login = new Login();
    app.changeActiveScreen(login);
  }

  gotoGallery() {
    const gallery = new Gallery();
    app.changeActiveScreen(gallery);
  }
  gotoCreate() {
    const create = new Create();
    app.changeActiveScreen(create);
  }
}
