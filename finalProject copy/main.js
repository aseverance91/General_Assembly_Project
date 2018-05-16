$(document).ready (function (){


const anchorElTwo = document.querySelector('.click-button-two');

anchorElTwo.addEventListener('click',event => {
	var xhr = $.get("http://api.giphy.com/v1/gifs/random?tag=fuck&api_key=X3SR3WWlYTW8tzghpaqqhIWjF83h0vJc");
	xhr.done(function(data) {console.log(data.data.title); $("#ourImage").attr("src",data.data.images.original.url)});

	console.log(xhr)
});

const anchorEl = document.querySelector('.click-button');

anchorEl.addEventListener('click',event => {
	var xhrl = $.get("http://api.giphy.com/v1/gifs/random?tag=Trump&api_key=X3SR3WWlYTW8tzghpaqqhIWjF83h0vJc");
	xhrl.done(function(data) {console.log(data.data.title); $("#ourImage2").attr("src",data.data.images.original.url)});
	
	console.log(xhrl)
});

});


