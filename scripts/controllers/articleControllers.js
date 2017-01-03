(function(model) {

  var articleController = {};

  articleController.reveal = function() {

    $('section[id="articles"]').hide();

    $('section[id="about"]').show();
  };

})(window);
