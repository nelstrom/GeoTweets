This Git repository includes all of the source code used in the [GeoTweets screencast][tutorial].

The tutorial includes several checkpoints:

* [gui][01] - Building the Graphical User Interface (GUI)
* [static][02] - Creating a template for the Twitter timeline
* [dynamic][03] - Fetching data from the Twitter API
* [map][04] - Adding a map with markers for geotagged tweets

Using this repository to follow the screencast
----------------------------------------------

First, you'll have to clone this repository:

    git clone git://github.com/nelstrom/GeoTweets.git

Change into the directory:

    cd GeoTweets

By default, the `git clone` command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    1 git push 01_gui origin/01_gui
    2 git push 02_static origin/02_static
    3 git push 03_dynamic origin/03_dynamic
    4 git push 04_map origin/04_map

You can review the list of local branches by running:

    git branches

And you can switch between branches with the `checkout` command. For example, to check out the `04_map` branch, run:

    git co 04_map


Live demo
---------

You can try out the demo here:

* [http://geo-tweets.heroku.com/][d]


[tutorial]: http://vimeo.com/15672696

[01]: https://github.com/nelstrom/GeoTweets/tree/01_gui
[02]: https://github.com/nelstrom/GeoTweets/tree/02_static
[03]: https://github.com/nelstrom/GeoTweets/tree/03_dynamic
[04]: https://github.com/nelstrom/GeoTweets/tree/04_map

[d]: http://geo-tweets.heroku.com/