Ext.define('GeoTweets.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Tweet'],
    views: ['Viewport', 'Timeline', 'Map'],
    refs: [
        {
            ref: 'timeline',
            selector: '#timeline'
        }
    ],

    init: function() {
        this.control({
            'button[action=refresh]': {
                tap: 'fetchTweets'
            }
        })
    },

    fetchTweets: function() {
        this.getTimeline().getStore().load();
    }
});
