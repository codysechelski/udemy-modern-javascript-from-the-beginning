//State Pattern


const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState);
  }

  this.change = function (state) {
    currentState = state;
  }
}


const homeState = function (page) {
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
}

const aboutState = function (page) {
  document.querySelector('#heading').textContent = 'About Us';
  document.querySelector('#content').innerHTML = `
    <p>
      Below is a static modal example(meaning its position and display have been overridden).Included are the modal header, modal body(required for padding), and modal footer(optional).We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.
    </p>
  `;
}

const contactState = function (page) {
  document.querySelector('#heading').textContent = 'Contact Us';
  document.querySelector('#content').innerHTML = `
    <form>
      <div class="form-row">
        <div class="col-md-4 mb-3">
          <label for="validationDefault01">First name</label>
          <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefault02">Last name</label>
          <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
        </div>
        <div class="col-md-4 mb-3">
          <label for="validationDefaultUsername">Username</label>
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroupPrepend2">@</span>
            </div>
            <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-6 mb-3">
          <label for="validationDefault03">City</label>
          <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault04">State</label>
          <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
        </div>
        <div class="col-md-3 mb-3">
          <label for="validationDefault05">Zip</label>
          <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required>
          <label class="form-check-label" for="invalidCheck2">
            Agree to terms and conditions
          </label>
        </div>
      </div>
      <button class="btn btn-primary" type="submit">Submit form</button>
    </form>
  `;
}

const page = new PageState();
page.init();
 
const
  home      = document.getElementById('navHome'),
  about     = document.getElementById('navAbout'),
  contact   = document.getElementById('navContact');
  brandLing = document.getElementById('brandLink');
  
home.addEventListener('click', function () {
  page.change(new homeState)
});

about.addEventListener('click', function () {
  page.change(new aboutState)
});

contact.addEventListener('click', function () {
  page.change(new contactState)
});

brandLing.addEventListener('click', function () {
  page.change(new homeState)
});