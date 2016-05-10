 //'RouteMenu' is a name of the view class
         var RouteMenu = Backbone.View.extend({
            el: '#routemenu',   //'el' defines which element to be used as the view reference

            //defines a click event to be occur on link
            events: {
               'click a' : 'onClick'
            },

            //After clicking on a link, router calls 'navigate' to update URL
            onClick: function( e ) {
               router.navigate('/');
            }
        });

        //'Router' is a name of the router class
        var Router = Backbone.Router.extend({

           //The 'routes' maps URLs with parameters to functions on your router
           routes: {
              'route/:id' : 'defaultRoute'
           },
        });

        //'routemenu' is an instance of the view class
        var routemenu = new RouteMenu();

        //It start listening to the routes and manages the history for bookmarkable URL's
        Backbone.history.start();