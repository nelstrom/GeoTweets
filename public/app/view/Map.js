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

    processTweets: function(tweetlist) {
        for (var i = 0, ln = tweetlist.length; i < ln; i++) {
            var tweet = tweetlist[i].data;
            if (tweet.geo && tweet.geo.coordinates) {
                this.addMarker(tweet);
            }
        }
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