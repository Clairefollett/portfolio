var projectView = {};

projectView.populateFilters = function() {
  $('article').not('.template').each(function () {
    var authorName, category, optionTag;
    console.log('I work');
    authorName = $(this).attr('data-author');
    console.log(authorName);
    optionTag = '<option value="' + authorName + '">' + authorName + '</option>';
    $('#author-filter').append(optionTag);
    console.log(optionTag);

    category = $(this).attr('data-category');
    console.log(category);
    optionTag = '<option value="' + category + '">' + category + '</option>';
    // if ($('#category-filter option[value"' + category +'"]').length === 0) {
    //   $('#category-filter').append(optionTag);
    // }
  });
};

projectView.handleAuthorFilter = function() {
  $('#author-filter').on('change', function() {
    var author = ($(this).val());
    if (author) {
      $('article').hide();
      $('article[data-author="' + author + '"]').fadeIn(2000);
    } else {
      $('article').not('.template').show();
    }
    $('#category-filter').val('');
  });
};

projectView.handleCategoryFilter = function() {
  $('#category-filter').on('change', function() {
    var category = ($('#category-filter').val());
    if (category) {
      $('article').hide();
      $('article[data-category="' + category + '"]').fadeIn(2000);
    } else {
      $('article').not('.template').show();
    }
    $('#author-filter').val('');
  });
};

projectView.populateFilters();
projectView.handleAuthorFilter();
projectView.handleCategoryFilter();
