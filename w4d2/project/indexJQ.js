const selectQuizMessage = (value) => {
  if (value === "bad") {
    return "UNACEPPTAAAAABLE";
  }
  if (value === "best") {
    return "Good.";
  }
  return "What happened ?!";
};

const createResultMessage = (result) => {
  // <div class="recent_result">
  //         <h1>YOUR RESULT IS:</h1>
  //         <p>MESSAGE</p>
  //       </div>

  const newDiv = $("<div>").addClass("recent_result");
  const newH1 = $("<h1>").text("YOUR RESULT IS:");
  const newP = $("<p>").text(result);

  newDiv.append(newH1);
  newDiv.append(newP);

  return newDiv;
};

$(document).ready(() => {
  console.log("Page is ready!");

  const oldText = $("header h1").text();
  $("header h1").text("Super Potato Quiz JQUERY EDITION");

  $("button").on("click", (event) => {
    const result = selectQuizMessage(event.target.value);

    const newBanner = createResultMessage(result);

    $(".result").append(newBanner);
  });

  $("header h1").click(() => {
    $("body").css("background-color", generateNewColor());
  });
});
