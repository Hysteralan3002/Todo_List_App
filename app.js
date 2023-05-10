$(document).ready(function () {
  $("#input").change(function () {
    var input = $(this).val();
    $("ul").append(
      "<li>" +
        input +
        '<i class="fas fa-check-circle"></i><i class="fas fa-trash"></i> </li>'
    );
  });
  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
  $("ul").on("click", ".fa-check-circle", function () {
    $(this).parent("li").toggleClass("checked");
  });
});
