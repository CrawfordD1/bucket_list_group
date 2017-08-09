var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(
    container, {
      center: center,
      zoom: zoom
    });
};

MapWrapper.prototype.setCenter = function(coords){
  this.googleMap.setCenter(coords);
}