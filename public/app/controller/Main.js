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
        })
    },

    fetchTweets: function() {
        var store = this.getTimeline().getStore(),
            coords = this.getLocalmap()._geo.config,
            geocode = coords.latitude + ',' + coords.longitude + ',' + '5mi';

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
            var tweet = tweetlist[i];
            console.log(tweet.data.geo);
            if (tweet.geo && tweet.geo.coordinates) {
                addMarker(tweet);
            }
        }
        
    }
});
