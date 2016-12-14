var projects = [];

function Project (opts) {
  //contructor function with properties of each project you are posting
  this.title = opts.title;
  this.author = opts.author;
  this.body = opts.body;
}

Project.prototype.toHtml = function() {
  var $newProject = $('article.template').clone();
  $newProject.find('p').html(this.author);
  $newProject.find('h1').html(this.title);
  $newProject.find('section.project-body').html(this.body);

  $newProject.removeAttr('class');

  return $newProject;
};

projectsData.forEach(function(ele) {
  projects.push(new Project(ele));
});

projects.forEach(function(a) {
  $('#projects').append(a.toHtml());
});
