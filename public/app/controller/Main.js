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
