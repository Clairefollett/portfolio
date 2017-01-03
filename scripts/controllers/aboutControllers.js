(function(model) {

  var aboutController = {};

  aboutController.reveal = function() {
  //hiding the articles
    $('section[id="articles"]').hide();

  //showing only the about section
    $('section[id="about"]').show();
  };

  module.aboutController = aboutController;
}) (window);
