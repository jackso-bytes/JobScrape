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

  async postData() {
    const locationInput = document.querySelector("#location").value,
    techInput = document.querySelector("#tech").value,
    customURL = `https://www.google.com/search?ei=HSq0Xt7IDoz5gQbGip6ABg&q=${techInput}+${locationInput}&oq=${techInput}+${locationInput}+jobs+&gs_lcp=CgZwc3ktYWIQAzIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6BggAEAgQHjoGCAAQFhAeUOYSWNIXYIIZaABwAHgAgAGrAYgB7QaSAQM1LjOYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&uact=5&ibp=htl;jobs&sa=X&ved=2ahUKEwiH6N6-iaLpAhX9QUEAHTWjBGMQiYsCKAF6BAgKEBE#fpstate=tldetail&htivrt=jobs&htidocid=odTsQfLDpmatfzNQAAAAAA%3D%3D`,
    dataToSend = { customURL, techInput },
    fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    };
    const response = await fetch(
      "http://localhost:5500/something",
      fetchOptions
    );

    const data = await response.json();

    this.renderData(data);
  }

  renderData(data) {
    this.clearUI();

    //get arrays of  the data returned
    let titleArray = data.jobData.titles,
    hrefArray = data.jobData.hrefs;

    //iterate over array

    titleArray.forEach((title) => {
      const card = document.createElement("div");
      card.classList.add("row");
      card.innerHTML = `
        <a href= "#>
            <div class="col s12 m6 offset-m3">
                <div class="card">
                    <div class="card-content">
                        <i class="large material-icons red-text">timeline</i>
                        <span class="card-title text-bold"><span></span>${title}</span>
                    </div>
                </div>
            </div>
        </a>`;
      display.appendChild(card);
    });
  }
}

//instances and events//

const ui = new UI();

submit.addEventListener("click", (e) => {
  e.preventDefault();
  ui.clearUI();
  ui.createLoadingUI();
  ui.postData();
});

console.log(submit);
