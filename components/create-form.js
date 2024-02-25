export default class form {
  constructor() {}

  initRender(container) {
    const form_choosing = document.createElement("form");

    //size--------------------
    const formSize = document.createElement("div");
    formSize.classList.add("form-size");
    //title
    // Create the form-size-label container
    const formSizeLabel = document.createElement("div");
    formSizeLabel.classList.add("form-size-label");
    // Create the label element
    const label = document.createElement("label");
    label.htmlFor = "form-size";
    label.textContent = "Choose your size:";
    label.classList.add("form-label");
    // Append the label element to the form-size-label container
    formSizeLabel.appendChild(label);
    // Append the form-size-label container to the formSize parent element
    formSize.appendChild(formSizeLabel);

    //s
    const formCheck = document.createElement("div");
    formCheck.classList.add("form-check", "form-check-inline");
    const sizeS = document.createElement("input");
    sizeS.type = "radio";
    sizeS.id = "size-s";
    sizeS.value = "s";
    sizeS.name = "size";
    sizeS.classList.add("form-check-input");

    const sizeSLabel = document.createElement("label");
    sizeSLabel.htmlFor = "size-s";
    sizeSLabel.textContent = "S";
    sizeSLabel.classList.add("form-check-label");

    // Append radio input and label to form-size
    formCheck.appendChild(sizeS);
    formCheck.appendChild(sizeSLabel);
    formSize.appendChild(formCheck);

    // Repeat the above process for M and L sizes
    const formCheck2 = document.createElement("div");
    formCheck2.classList.add("form-check", "form-check-inline");
    const sizeM = document.createElement("input");
    sizeM.type = "radio";
    sizeM.id = "size-m";
    sizeM.value = "m";
    sizeM.name = "size";
    sizeM.classList.add("form-check-input");

    const sizeMLabel = document.createElement("label");
    sizeMLabel.htmlFor = "size-m";
    sizeMLabel.textContent = "M";
    sizeMLabel.classList.add("form-check-label");
    // Append radio input and label to form-size
    formCheck2.appendChild(sizeM);
    formCheck2.appendChild(sizeMLabel);
    formSize.appendChild(formCheck2);

    // L
    const formCheck3 = document.createElement("div");
    formCheck3.classList.add("form-check", "form-check-inline");
    const sizeL = document.createElement("input");
    sizeL.type = "radio";
    sizeL.id = "size-l";
    sizeL.value = "l";
    sizeL.name = "size";
    sizeL.classList.add("form-check-input");

    const sizeLLabel = document.createElement("label");
    sizeLLabel.htmlFor = "size-l";
    sizeLLabel.textContent = "L";
    sizeLLabel.classList.add("form-check-label");

    // Append radio input and label to form-size
    formCheck3.appendChild(sizeL);
    formCheck3.appendChild(sizeLLabel);
    formSize.appendChild(formCheck3);

    // Append formSize to your main form (replace 'form' with your actual form element)
    form_choosing.appendChild(formSize);

    //shape----------------------------
    const formShape = document.createElement("div");
    formShape.classList.add("form-shape");
    //title
    // Create the form-shape-label container
    const formShapeLabel = document.createElement("div");
    formShapeLabel.classList.add("form-shape-label");
    // Create the label element
    const labelShape = document.createElement("label");
    labelShape.htmlFor = "form-shape";
    labelShape.textContent = "Choose your form:";
    labelShape.classList.add("form-label");
    // Append the label element to the form-shape-label container
    formShapeLabel.appendChild(labelShape);
    // Append the form-shape-label container to the formShape parent element
    formShape.appendChild(formShapeLabel);

    //straight
    // Create the form-check container
    const formCheck4 = document.createElement("div");
    formCheck4.classList.add("form-check", "form-check-inline");

    // Create the neckline label and radio button
    const necklineRound = document.createElement("input");
    necklineRound.type = "radio";
    necklineRound.id = "neckline-round";
    necklineRound.value = "round";
    necklineRound.name = "neckline";
    necklineRound.classList.add("form-check-input");

    const necklineRoundLabel = document.createElement("label");
    necklineRoundLabel.htmlFor = "neckline-round";
    necklineRoundLabel.textContent = "round";
    necklineRoundLabel.classList.add("form-check-label");
    // Append radio input and label to form-check
    formCheck4.appendChild(necklineRound);
    formCheck4.appendChild(necklineRoundLabel);
    // Append form-check to the formShape parent element
    formShape.appendChild(formCheck4);

    //flared
    // Create the form-check container
    const formCheck5 = document.createElement("div");
    formCheck5.classList.add("form-check", "form-check-inline");

    // Create the neckline label and radio button
    const necklineCollarred = document.createElement("input");
    necklineCollarred.type = "radio";
    necklineCollarred.id = "neckline-collarred";
    necklineCollarred.value = "collared";
    necklineCollarred.name = "neckline";
    necklineCollarred.classList.add("form-check-input");

    const necklineCollarredLabel = document.createElement("label");
    necklineCollarredLabel.htmlFor = "neckline-collarred";
    necklineCollarredLabel.textContent = "collarred";
    necklineCollarredLabel.classList.add("form-check-label");

    // Append radio input and label to form-check
    formCheck5.appendChild(necklineCollarred);
    formCheck5.appendChild(necklineCollarredLabel);

    // Append form-check to the formShape parent element
    formShape.appendChild(formCheck5);
    // Append formSize to your main form (replace 'form' with your actual form element)
    form_choosing.appendChild(formShape);

    //neckline----------------------

    // sleeves----------------------

    //bottoms------------------------

    //color--------------------------

    //design--------------------------

    container.appendChild(form_choosing);

    const form = `              <form class=" " action="">
    <div class="form-neckline">
        <div class="form-neckline-label">
            <label for="form-neckline" class="form-label">Choose your neckline:</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="neckline-round" value="round" name="neckline">
            <label class="form-check-label" for="inlineradio1">round</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="neckline-collarred" value="collared" name="neckline">
            <label class="form-check-label" for="inlineradio2">collarred</label>
          </div>
    </div>
    <div class="form-sleeves">
        <div class="form-sleeves-label">
            <label for="form-sleeves" class="form-label">Choose your sleeves:</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="sleeves-straight" value="sleeves-straight"  name="sleeves">
            <label class="form-check-label" for="inlineradio1">straight</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="sleeves-flaired" value="sleeves-flared" name="sleeves">
            <label class="form-check-label" for="inlineradio2">flaired</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="sleeves-bell" value="sleeves-bell" name="sleeves">
            <label class="form-check-label" for="inlineradio3">bell</label>
          </div>
    </div>
    <div class="form-bottoms">
        <div class="form-bottoms-label">
            <label for="form-bottoms" class="form-label">Choose your bottoms:</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="bottoms-pants" value="pants" name="bottoms">
            <label class="form-check-label" for="inlineradio1">pants</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="bottom-skirt" value="skirt" name="bottoms">
            <label class="form-check-label" for="inlineradio2">skirt</label>
          </div>
    </div>
    <div class="form-color">
        <div class="form-color-label">
            <label for="form-color" class="form-label">Choose your color:</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="blush-pink" value="pink"  name="color">
            <label class="form-check-label" for="inlineradio1">blush pink</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="red" value="red" name="color">
            <label class="form-check-label" for="inlineradio2">red</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="yellow" value="yellow" name="color">
            <label class="form-check-label" for="inlineradio1">yellow</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="baby-blue" value="option4" name="blue">
            <label class="form-check-label" for="inlineradio2">baby blue</label>
          </div>
    </div>
    <div class="form-design">
        <div class="form-design-label">
            <label for="form-design" class="form-label">Choose your design:</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="none" value="none" name="design">
            <label class="form-check-label" for="inlineradio1">none</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="embroidered-flowers" value="embroidered-flowers" name="design">
            <label class="form-check-label" for="inlineradio2">embroidered flowers</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="embroidered-leaves" value="embroidered-leaves" name="design">
            <label class="form-check-label" for="inlineradio1">embroidered leaves</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" id="bundled-flowers" value="bundled-flowers" name="design">
            <label class="form-check-label" for="inlineradio2">bundled flowers</label>
          </div>
    </div>
</form>`;

    container.innerHTML += form;
  }
}
