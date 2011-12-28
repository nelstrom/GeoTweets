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
    },

    launch: function() {
        var localmap = this.getLocalmap();
        localmap._geo.on('locationupdate', function(geo) {
            console.log('Location updated: ' + geo.latitude + ", " + geo.longitude)
            // this.fetchTweets()
        });
        localmap._geo.on('locationerror', function() {
            console.error('Location failed to update.')
        });
        localmap._geo.updateLocation(function(geo) {
            console.log('Manually updated location');
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

            if (tweet.geo && tweet.geo.coordinates) {
                this.getLocalmap().addMarker(tweet);
            } else {
                console.log('no geo data')
            }
        }
        
    }

});
