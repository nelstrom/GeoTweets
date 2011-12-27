Ext.define('GeoTweets.store.Tweets', {
    extend: 'Ext.data.Store',
    model: 'GeoTweets.model.Tweet',

    autoLoad: true,
    proxy: {
        type: 'jsonp',
        url: 'http://search.twitter.com/search.json',
        extraParams: {
            rpp: 30,
            q: 'bored'
        },
        reader: {
            root: 'results'
        }
    }
});
