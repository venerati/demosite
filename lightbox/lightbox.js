//when an image is clicked it needs to load a box with said image in it.
var $overlay = $('<div id="overlay"></div>');
var $image = $('<img id="boximage">');
var $descrip = $('<p id="cap"></p>');


//create a box
$("body").append($overlay);
$overlay.append($image);
$overlay.append($descrip);
//on click needs to be recorded
$("#lightbox a").click(function(event){
	//stops the browser from opening the link in the window.
	event.preventDefault();
	var href = $(this).attr("href");
	//injects the image url into the src for var image.
	$image.attr("src", href);

	//injects the alt text into the $descrip variable.
	var altText = $(this).children("img").attr("alt");
	$descrip.text(altText);


	//changes the display attribute from 'none' to 'show'
	$overlay.show();


});

//click again and the image will go away
$("#overlay").click(function(event){
	$overlay.hide()
});
