'use strict';
var viewTab = {};

viewTab.handleMainNav = function () {
  $('.nav-menu').on('click','.tab',function(){
    var selectedTab = $(this).attr('data-content');
    $('.tab-content').hide();
    $('#' + selectedTab).fadeIn();
  });
};


viewTab.handleLoad = function () {
  $('.tab-content').hide();
  $('#projects').fadeIn();
};

viewTab.handleMainNav();
viewTab.handleLoad();
