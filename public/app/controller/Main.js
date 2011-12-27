Ext.define('GeoTweets.controller.Main', {
    extend: 'Ext.app.Controller',
    
    models: ['Tweet'],
    views: ['Viewport', 'Timeline', 'Map'],

    init: function() {
        this.control({
            'button[action=refresh]': {
                tap: 'fetchTweets'
            }
        })
    },

    fetchTweets: function() {
        console.log('Fetching results from Twitter...')
    }
});
