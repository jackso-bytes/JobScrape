//grab DOM elements needed//
display = document.querySelector(".populate-ui");
submit = document.querySelector(".btn");

class UI {
  clearUI() {
    display.innerHTML = "";
  }

  createLoadingUI() {
    display.innerHTML = `
   <div class="row center-align margin-vertical">
        <div class="col s12 m6 offset-m3">
          <div class="card center-align">
            <div class="card-content">
              <i class="large material-icons indigo-text">local_shipping</i>
              <span class="card-title text-bold">
               Your Dream Job is on it's Way
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  <div class="progress margin-bottom">
      <div class="indeterminate"></div>
  </div>`;
  }

  async fetchData() {
    const response = await fetch("http://localhost:5501/creators");
    const data = await response.json();
    console.log(data);

    this.renderData(data);
  }

  async postData() {
    const locationInput = document.querySelector("#location").value;
    const techInput = document.querySelector("#location").value;
    const customURL = `https://www.google.com/search?ei=bd6yXqzhCNPrgAbTkKuQBg&q=${techInput}+${locationInput}+&oq=react+norwich+job+&gs_lcp=CgZwc3ktYWIQAzIFCCEQoAEyBQghEKABMgUIIRCgAToGCAAQCBAeOgYIABAWEB5QzRdYrxxgtR1oAHAAeACAAYQBiAHEBJIBAzYuMZgBAKABAaoBB2d3cy13aXo&sclient=psy-ab&uact=5&ibp=htl;jobs&sa=X&ved=2ahUKEwjhi7aWzZ_pAhWMi1wKHQsNDmIQiYsCKAF6BAgKEBE#fpstate=tldetail&htivrt=jobs&htidocid=j8zY0TjxL2Nbo38xAAAAAA%3D%3D`;
    await fetch("http://localhost:5501/something", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      //make sure to serialize your JSON body
      body: JSON.stringify({ customURL }),
    }).then((response) => {
      console.log(response);
    });
    console.log(data);
    this.renderData(data);
  }

  renderData(data) {
    console.log("hello world");
    this.clearUI();
    display.innerHTML = `<li>${data}</li>`;
  }
}

//instances and events//

const ui = new UI();

submit.addEventListener("click", (events) => {
  events.preventDefault();
  ui.clearUI();
  ui.createLoadingUI();
  ui.postData();
});

console.log(submit);
