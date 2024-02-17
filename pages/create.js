import app from "../app.js";
import Footer from "../components/footer.js";
import Nav from "../components/nav.js";

export default class Create {
  constructor() {
    // add link for header
    document.getElementsByTagName("head")[0].innerHTML = `<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Heritage</title>
    <!-- cdn for plugins and extensions -->
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
  <!-- icon branding -->
  <link rel="shortcut icon" href="pictures/Untitled2.png">`; }


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
    const card_body = document.createElement("div");
    card_body.classList.add("card-body");

    const form = document.createElement("form")

    const form_size = document.createElement("div");
    form_size.id = "form-size";

    const label_username = document.createElement("label");
    label_username.setAttribute("for", "form-size");
    label_username.innerText = "Choose your size";
    label_username.classList.add("form-label");

    


    // add footer in page
    if (!document.getElementsByTagName("footer").length) {
      const footer = new Footer();
      footer.initRender(container);
    }
  } 

}
