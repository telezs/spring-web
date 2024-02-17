export default class form {
    constructor() {}
  
    initRender(container) {
      const form = `              <form class=" " action="">
      <div class="form-size">
          <div class="form-size-label">
              <label for="form-size" class="form-label">Choose your size:</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="size-s" value="s"name="size">
              <label class="form-check-label" for="inlineradio1">S</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="size-m" value="m" name="size">
              <label class="form-check-label" for="inlineradio2">M</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="size-l" value="l" name="size">
              <label class="form-check-label" for="inlineradio3">L</label>
            </div>
      </div>
      <div class="form-shape">
          <div class="form-shape-label">
              <label for="form-shape" class="form-label">Choose your form:</label>
          </div>
          <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="form-straight" value="straight" name="shape">
              <label class="form-check-label" for="inlineradio1">Straight</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" id="form-flared" value="flared" name="shape">
              <label class="form-check-label" for="inlineradio2">Flared</label>
            </div>
      </div>
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
  </form>`
  
    container.innerHTML += form;
    }
  }