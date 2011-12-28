Ext.define('GeoTweets.view.Map', {
    extend: 'Ext.Map',
    xtype: 'localmap',
    config: {
        title: 'Map',
        useCurrentLocation: true
    },

    constructor: function() {
        this.callParent(arguments);

        this._geo.setAutoUpdate(false);
        this.infoBox = new google.maps.InfoWindow();
    },

    addMarker: function(tweet) {
        var infoWindow = this.infoBox,
        point = new google.maps.LatLng(
            tweet.geo.coordinates[0],
            tweet.geo.coordinates[1]
        ),
        marker = new google.maps.Marker({
            map: this.getMap(),
            position: point
        });

        google.maps.event.addListener(marker, "click", function() {
            infoWindow.setContent(tweet.text);
            infoWindow.open(this.getMap(), marker);
        });

    }

})