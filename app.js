// Make the project great again with jQuery ..
//Delete buttons should remove the topics (li elements).

$(document).on("click", ".delete", function(e) {
  e.preventDefault();
  $(this)
    .closest("li")
    .remove();
});

//Add button should add a topic
//(an li element inside 2 span elements).

$("button").on("click", function(e) {
  e.preventDefault();
  let addList = $("#add-list").val();

  if (addList !== "") {
    $("ul").append(
      "<li><span class='name'>" +
        addList +
        "</span><span class='delete' >delete</span>"
    );
    $("#add-list").val("");
  }
});

//Hide
$(document).ready(function() {
  $("#hide").click(function() {
    $("ul").toggle();
  });
});

//SEARCH
//There is search field above.
//It should filter the topics (filter li elements).
//It should be case-insensitive.

$(document).ready(function() {
  $("#text").on("keyup", function() {
    var value = $(this)
      .val()
      .toLowerCase();
    $("#list li").filter(function() {
      $(this).toggle(
        $(this)
          .text()
          .toLowerCase()
          .indexOf(value) > -1
      );
    });
  });
});
