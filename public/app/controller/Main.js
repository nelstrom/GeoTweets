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
        var store = this.getTimeline().getStore();

        store.getProxy().setExtraParam('q', 'sencha touch');
        store.load();
    },

    updateMap: function() {
        
    }
});
