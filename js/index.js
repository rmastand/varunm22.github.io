$("#frontProjects").hide();
function showThis(str) {
  if (str=='react') {
    $("#reactProjects").show();
    $("#frontProjects").hide();
    $("#react").html("<h3>React.js Projects <i class='fa fa-caret-down'></i></h3>");
    $("#front").html("<h3>Front End Projects</h3>");
  } else if (str=='front') {
    $("#reactProjects").hide();
    $("#frontProjects").show();
    $("#react").html("<h3>React.js Projects</h3>");
    $("#front").html("<h3>Front End Projects <i class='fa fa-caret-down'></i></h3>");
  }
}