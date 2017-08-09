var init = function(){

var url = "https://restcountries.eu/rest/v2/all"
var countries = []
getCountriesFromAPI(url);
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
  for(country of countries){
    var option = document.createElement('option');
    option.innerText = country.name;
    option.value = country;
    selector.appendChild(option);
  }
}

window.addEventListener('load', init);