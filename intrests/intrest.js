$(document).ready(function () {
  var api_key = "563492ad6f917000010000017690ecfff6ab4c5b9dcffa5f3544647c";
  var image = "";

  $("#form").submit(function (event) {
    event.preventDefault();

    var search = $("#search").val();

    imagesearch();
  });
  function imagesearch() {
    $.ajax({
      method: "GET",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", api_key);
      },
      url:
        "https://api.pexels.com/v1/search?query=" +
        $("#search").val() +
        "&per_page=6&page=1",

      success: function (data) {
        console.log(data);

        data.photos.forEach((photo) => {
          image = `
                  <img src = "${photo.src.original}" width = "400" height = "300"/>
                  `;
          $("#images").append(image);
        });
      },
      error: function (error) {
        console.error();
      },
    });
  }
});
