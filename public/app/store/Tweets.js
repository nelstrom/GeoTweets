Ext.define('GeoTweets.store.Tweets', {
    extend: 'Ext.data.Store',
    model: 'GeoTweets.model.Tweet',

    proxy: {
        type: 'jsonp',
        url: 'http://search.twitter.com/search.json',
        extraParams: {
            rpp: 100
        },
        reader: {
            root: 'results'
        }
    }
});
