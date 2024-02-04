import Footer from "../components/footer/footer.js";
import Nav from "../components/nav/nav.js";

export default class Home {
  constructor() {
    // Change title
    document.getElementsByTagName("title")[0].innerText = "Home";
  }
  initRender(container) {
    // add nav in page
    if (!document.getElementsByTagName("nav").length) {
      let nav = new Nav();
      nav.initRender(container);
    }

    const a = document.createElement("div");
    a.innerHTML = "dsajjsdakjgh";

    container.appendChild(a);

    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      let footer = new Footer();
      footer.initRender(container);
    }
  }
  getBestSellers() {}
}
