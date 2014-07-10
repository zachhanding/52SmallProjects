(function($){
    var ListView = Backbone.View.extend({
        el: $('body'), // ataches 'this.el' to an existing element
        initialize: function(){
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods
            this.render(); // not all views are self-rendering, but this one is
        },
        render: function(){
            $(this.el).append('<ul><li>Hello World.</li></ul>');
        }
    });
    
    var listView = new ListView();
})(jQuery);