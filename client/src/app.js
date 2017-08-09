var init = function(){

var url = "https://restcountries.eu/rest/v2/all"
var countries = []
getCountriesFromAPI(url);

var countryselect = document.getElementById("country-selection");
countryselect.addEventListener('change', function(){

  if(this.value !== "none"){

  var url = "http://localhost:3000/bucketlist";
  var method = "POST";
  var postData = this.value;
  // var postData = JSON.parse(this.value);

  var async = true;

  var request = new XMLHttpRequest();

  request.onload = function () {
     var status = request.status; // HTTP response status, e.g., 200 for "200 OK"
     var data = request.responseText; // Returned data, e.g., an HTML document.
  }

  request.open(method, url, async);

  request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  request.send(postData);
}
})
}

var getCountriesFromAPI = function(url){
  makeRequest(url, requestComplete);
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener('load', callback);
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200)return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  populateCountrySelector(countries);
}

var populateCountrySelector = function(countries){
  var selector = document.getElementById("country-selection");
  var option = document.createElement('option');
  option.innerText = "Select a country to add";
  option.value = "none";
  selector.appendChild(option);

  for(country of countries){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = JSON.stringify(country);
    selector.appendChild(option);
  }
}

window.addEventListener('load', init);