Ext.define('GeoTweets.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Tweet'],
    views: ['Viewport', 'Timeline', 'Map'],
    refs: [
        {
            ref: 'timeline',
            selector: '#timeline'
        },
        {
            ref: 'localmap',
            selector: '#localmap'
        },
    ],

    init: function() {
        this.control({
            'button[action=refresh]': {
                tap: 'fetchTweets'
            }
        });
        window.tweetBubble = new google.maps.InfoWindow();
        window.mapPanel = this.getLocalmap();
    },

    fetchTweets: function() {
        var store = this.getTimeline().getStore(),
            coords = this.getLocalmap()._geo.config,
            geocode = coords.latitude + ',' + coords.longitude + ',' + '100mi';

        store.getProxy().setExtraParam('geocode', geocode);
        store.load({
            scope: this,
            callback: function(records, operation, success) {
                this.updateMap(records);
            }
        });
    },

    updateMap: function(tweetlist) {
        console.log('updating map...')
        

        for (var i = 0, ln = tweetlist.length; i < ln; i++) {
            var tweet = tweetlist[i].data;
// console.log(tweet.data.geo);
            if (tweet.geo && tweet.geo.coordinates) {
                this.addMarker(tweet);
            } else {
                console.log('no geo data')
            }
        }
        
    },
    
    addMarker: function(tweet) {
        console.log(tweet.geo);
        var latLng = new google.maps.LatLng(tweet.geo.coordinates[0], tweet.geo.coordinates[1]);
        console.log(latLng);
        var mapPanel = this.getLocalmap();
        window.mapPanel = mapPanel;
        
        var marker = new google.maps.Marker({
            map: mapPanel.getMap(),
            position: latLng
        });

        google.maps.event.addListener(marker, "click", function() {
            console.log('clicked a marker')
            window.tweetBubble.setContent(tweet.text);
            window.tweetBubble.open(mapPanel.map, marker);
        });
    }
});
