import app from "../app.js";
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";

export default class Create {
  constructor() {
    // Change title
    document.getElementsByTagName("title")[0].innerText = "Create";
  }
  initRender(container) {
    // add nav in page
    if (!document.getElementsByTagName("nav").length) {
      const nav = new Nav();
      nav.initRender(container);
    }

    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      const footer = new Footer();
      footer.initRender(container);
    }
  } 

}
