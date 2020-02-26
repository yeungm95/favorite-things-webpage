$(document).ready(function() {
  $("form#form").submit(function(event) {
    event.preventDefault()

    var f1 = $("#favoriteFood").val()
    var f2 = $("#favoriteArtist").val()
    var f3 = $("#favoritePlace").val()
    var f4 = $("#favoriteColor").val()
    var f5 = $("#favoriteSport").val()
    var f6 = $("#favoriteBook").val()

    var favoriteThingsArray = [f1, f2, f3, f4, f5, f6,]
    // console.log(favoriteThingsArray)

    // $("#output").text("My favorite sport is " + favoriteThingsArray[4])

    newArray = []
    newArray.push(favoriteThingsArray[1])
    newArray.push(favoriteThingsArray[0])
    newArray.push(favoriteThingsArray[2])

    $("ul#outputList").text("<li>" + newArray + "<li>")
  

    // Testing
    // var favoriteThingsArray = []
    // favoriteThingsArray.push()

  })
})