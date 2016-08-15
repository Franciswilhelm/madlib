$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var inputs = ["person", "person2", "animal", "exclamation", "verb", "noun"];
    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);
    });


    $("#story").show();

    event.preventDefault();
  });
  $("#letterblanks").submit(function(event) {
    var letternameInput = $("input#lettername").val();

    $(".lettername").text(letternameInput);

    $("#letter").show();

    event.preventDefault();
  });

  $("#capitalization").submit(function(event) {
    var whateverInput = $("input#whatevs").val();

    var upperinput = whateverInput.toUpperCase();

    $(".whatevs").text(upperinput);

    $("#capitalresponse").show();

    event.preventDefault();
  });
});
