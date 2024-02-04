export default class Footer {
  constructor() {}

  initRender(container) {
    let footer = document.createElement("footer");

    let container_fluid_div = document.createElement("div");
    container_fluid_div.classList.add("container-fluid");
    container_fluid_div.classList.add("bg-body-secondary");
    container_fluid_div.style = "margin-top: 2rem";

    let container_div = document.createElement("div");
    container_div.classList.add("container");

    let row_1 = document.createElement("div");
    row_1.classList.add("row");

    let col_div_1 = document.createElement("div");
    col_div_1.classList.add("col-sm-5");
    col_div_1.classList.add("hidden");
    col_div_1.style = "padding: 0.2rem; margin: 1rem 0rem 1rem 0rem";

    let link_header = document.createElement("a");
    link_header.classList.add("footer-link");
    link_header.classList.add("fw-bold");
    link_header.href = "#";
    link_header.innerText = "Header";

    let link_home = document.createElement("a");
    link_home.classList.add("footer-link");
    link_home.href = "#";
    link_home.innerText = "Home";

    let link_discount = document.createElement("a");
    link_discount.classList.add("footer-link");
    link_discount.href = "#";
    link_discount.innerText = "Discount";

    let link_impact = document.createElement("a");
    link_impact.classList.add("footer-link");
    link_impact.href = "#";
    link_impact.innerText = "Impact";

    let link_share = document.createElement("a");
    link_share.classList.add("footer-link");
    link_share.href = "#";
    link_share.innerText = "Share";

    col_div_1.appendChild(link_header);
    col_div_1.appendChild(link_home);
    col_div_1.appendChild(link_discount);
    col_div_1.appendChild(link_impact);
    col_div_1.appendChild(link_share);

    let col_div_2 = document.createElement("div");
    col_div_2.classList.add("col-sm-5");
    col_div_2.classList.add("footer");
    col_div_2.style = "padding: 0.2rem; margin: 1rem 0rem 1rem 0rem";

    let icons_div = `<div class="icon-container" style="margin-top: 0.5rem">
    <i class="fa-brands fa-facebook fa-xl"></i>
    <i class="fa-solid fa-circle-user fa-xl"></i>
    <i class="fa-solid fa-circle-info fa-xl"></i>
  </div>`;
    let infor_links = `<a href="" class="footer-link">abcde@gmail.com</a>
    <a href="" class="footer-link">(+9999) 0000 0909</a>
    <a href="" class="footer-link"
      >220 Nguyen Van Tao,Nha Be District, Ho Chi Minh City</a
    >`;

    col_div_2.appendChild(link_header);
    col_div_2.innerHTML += icons_div;
    col_div_2.innerHTML += infor_links;

    let col_div_3 = `<div class="col-sm-2 footer">
    <img
      src="pictures/Untitled2.png"
      alt=""
      class="img-fluid"
      style="padding: 1rem; margin: 1rem 0rem 0rem 0rem"
    />
  </div>`;

    row_1.appendChild(col_div_1);
    row_1.appendChild(col_div_2);
    row_1.innerHTML += col_div_3;

    let row_2 = `<div class="row">
    <p class="fs-6 fst-italic text-center">
      @ copyright abcde corp 2023
    </p>
  </div>`;

    container_div.appendChild(row_1);
    container_div.innerHTML += row_2;

    container_fluid_div.appendChild(container_div);

    footer.appendChild(container_fluid_div);
    container.appendChild(footer);
  }

  // goto other pages by links
  gotoHome() {}
}
