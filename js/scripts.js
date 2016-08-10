$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput= $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

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
