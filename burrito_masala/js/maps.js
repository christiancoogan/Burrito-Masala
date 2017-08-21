function initMap() {
        var portland = {lat: 45.518994, lng: -122.675154};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: portland
        });
        var marker = new google.maps.Marker({
          position: portland,
          map: map
        });
      }