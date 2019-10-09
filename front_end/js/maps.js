/*--##################################################### 
#   ZEN_TECH solutions                                  #
#   Programmer: Zukisa NANTE                            #
#   Qualifications: Bachelor Electrical  Engineering    #
#   Specialisation: Computer Operating Systems          #
######################################################-*/

/* function to call my API using my key */
function initMap() {
    var myLatLng = { lat: -25.363, lng: 131.044 };

    var map = new google.maps.Map(document.getElementByClassNames("maps"), {
        zoom: 4,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!"
    });
}