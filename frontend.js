"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//grab DOM elements needed//
var display = document.querySelector(".display");
var submit = document.querySelector(".btn");
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.prototype.clearUI = function () {
        display.innerHTML = "";
    };
    UI.prototype.createLoadingUI = function () {
        display.innerHTML = "\n   <div class=\"row center-align margin-vertical\">\n        <div class=\"col s12 m6 offset-m3\">\n          <div class=\"card center-align\">\n            <div class=\"card-content\">\n              <i class=\"large material-icons indigo-text\">local_shipping</i>\n              <span class=\"card-title text-bold\">\n               Your Dream Job is on it's Way\n              </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  <div class=\"progress margin-bottom\">\n      <div class=\"indeterminate\"></div>\n  </div>";
    };
    UI.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch("http://localhost:5501/creators")];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        console.log(data);
                        this.renderData(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    UI.prototype.postData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var locationInput, techInput, customURL, dataToSend, fetchOptions, response, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        locationInput = document.querySelector("#location").value;
                        techInput = document.querySelector("#tech")
                            .value;
                        customURL = "https://www.google.com/search?ei=HSq0Xt7IDoz5gQbGip6ABg&q=" + techInput + "+" + locationInput + "&oq=" + techInput + "+" + locationInput + "+jobs+&gs_lcp=CgZwc3ktYWIQAzIFCCEQoAEyBQghEKABMgUIIRCgATIFCCEQoAE6BggAEAgQHjoGCAAQFhAeUOYSWNIXYIIZaABwAHgAgAGrAYgB7QaSAQM1LjOYAQCgAQGqAQdnd3Mtd2l6&sclient=psy-ab&uact=5&ibp=htl;jobs&sa=X&ved=2ahUKEwiH6N6-iaLpAhX9QUEAHTWjBGMQiYsCKAF6BAgKEBE#fpstate=tldetail&htivrt=jobs&htidocid=odTsQfLDpmatfzNQAAAAAA%3D%3D";
                        console.log(locationInput, techInput, customURL);
                        dataToSend = { customURL: customURL };
                        fetchOptions = {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(dataToSend),
                        };
                        return [4 /*yield*/, fetch("http://localhost:5500/something", fetchOptions)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.renderData(data);
                        return [2 /*return*/];
                }
            });
        });
    };
    UI.prototype.renderData = function (data) {
        console.log(data);
        this.clearUI();
        //get arrays of  the data returned
        var titleArray = data.jobData.titles;
        var hrefArray = data.jobData.hrefs;
        console.log(hrefArray);
        //iterate over array
        titleArray.forEach(function (title) {
            var card = document.createElement("div");
            card.classList.add("row");
            card.innerHTML = "\n        <a href= \"#>\n            <div class=\"col s12 m6 offset-m3\">\n                <div class=\"card\">\n                    <div class=\"card-content\">\n                        <i class=\"large material-icons red-text\">timeline</i>\n                        <span class=\"card-title text-bold\"><span></span>" + title + "</span>\n                    </div>\n                </div>\n            </div>\n        </a>";
            display.appendChild(card);
        });
    };
    return UI;
}());
//instances and events//
var ui = new UI();
submit.addEventListener("click", function (e) {
    e.preventDefault();
    ui.clearUI();
    ui.createLoadingUI();
    ui.postData();
});
console.log(submit);
