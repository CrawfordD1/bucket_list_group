var UI = function(countries){
  this.render(countries);
}

UI.prototype = {
  render: function(countries){

    console.log(countries);
    countries.forEach( function(country){
      var mapDiv = document.createElement('div');
      var img = document.createElement('img');
      var li = document.createElement('li');
      var ul = document.getElementById('countries');

      var center = {lat: country.latlng[0]. lng: country.latlng[1]};
      var zoom = 10;
      var mainMap = new MapWrapper(mapDiv, center, zoom);

      img.src = country.flag;
      li.innerText = country.name;
      img.appendChild(mapDiv);
      li.appendChild(img);
      ul.appendChild(li);
    })
  }
}


module.exports = UI;