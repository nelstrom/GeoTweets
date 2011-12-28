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
    },

    fetchTweets: function() {
        var store = this.getTimeline().getStore(),
            coords = this.getLocalmap()._geo.config,
            geocode = coords.latitude + ',' + coords.longitude + ',' + '100mi';

        store.getProxy().setExtraParam('geocode', geocode);
        store.load({
            scope: this,
            callback: function(records) {
                this.getLocalmap().processTweets(records)
            }
        });
    }

});
