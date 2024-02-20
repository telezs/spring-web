export default class modal {
    constructor() {
      document.getElementsByTagName(
        "head"
      )[0].innerHTML += `<!-- Bootstrap CSS -->
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  `;
    }
  
    initRender(container) {
      const modal = `                    <div class="px-4 py-5">
    
      <h5 class="text-uppercase">Jonathan Adler</h5>



  <h4 class="mt-5 theme-color mb-5">Thanks for your order</h4>

  <span class="theme-color">Payment Summary</span>
  <div class="mb-3">
      <hr class="new1">
  </div>

  <div class="d-flex justify-content-between">
      <span class="font-weight-bold">Ether Chair(Qty:1)</span>
      <span class="text-muted">$1750.00</span>
  </div>

  <div class="d-flex justify-content-between">
      <small>Shipping</small>
      <small>$175.00</small>
  </div>


  <div class="d-flex justify-content-between">
      <small>Tax</small>
      <small>$200.00</small>
  </div>
  
  <div class="d-flex justify-content-between mt-3">
      <span class="font-weight-bold">Total</span>
      <span class="font-weight-bold theme-color">$2125.00</span>
  </div>
  <div class="text-center mt-5">
      <!-- Button to Open the Modal -->
<button type="button" class="btn btn-primary d-flex mx-auto btn-lg" data-toggle="modal" data-target="#myModal">
Track your order
</button>

<!-- The Modal -->
<div class="modal fade" id="myModal">
<div class="modal-dialog modal-dialog-centered">
<div class="modal-content modal-order">

  <!-- Modal Header -->
  <div class="modal-header">
    <h4 class="modal-title mx-auto">Order Status<br>AWB Number-5335T5S</h4>
    <button type="button" class="close" data-dismiss="modal">&times;</button>
  </div>
  
  <!-- Modal body -->
  <div class="modal-body1">
    <div class="progress-track">
        <ul id="progressbar">
            <li class="step0 active " id="step1">Order placed</li>
            <li class="step0 active text-center" id="step2">In Transit</li>
            <li class="step0 active text-right" id="step3"><span id="three">Out for Delivery</span></li>
            <li class="step0 text-right" id="step4">Delivered</li>
        </ul>
    </div>
    <div class="row">
      <div class="col-9">
        <div class="details d-table">
          <div class="d-table-row">
            <div class="d-table-cell">
              Shipped with
            </div>
            <div class="d-table-cell">
              UPS Expedited
            </div>
          </div>
          <div class="d-table-row">
            <div class="d-table-cell">
              Estimated Delivery
            </div>
            <div class="d-table-cell">
              02/12/2017
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="d-table-row">
          <a href=#><i class="fa fa-phone" aria-hidden="true"></i></a>
        </div>
        <div class="d-table-row">
          <a href=#><i class="fa fa-envelope" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>      
  </div>                  
</div>
</div>
</div>
  </div>                   
  </div> `;
      container.innerHTML += modal;
    }
  }
  