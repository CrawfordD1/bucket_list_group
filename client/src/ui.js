var UI = function(countries){
  this.render(countries);
}

UI.prototype = {
  render: function(countries){

    console.log(countries);
    countries.forEach( function(country){
      var img = document.createElement('img');
      var li = document.createElement('li');
      var ul = document.getElementByID('countries');

      img.src = country.flag;
      li.innerText = country.name;
      li.appendChild(img);
      ul.appendChild(li);
    })
  }
}


module.exports = UI;