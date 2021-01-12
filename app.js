// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

//  automatic date 
document.getElementById('date').innerHTML = new Date().toDateString();
// close links 
document.querySelector(".nav-toggle").addEventListener("click", function () {
	document.querySelector(".links-container").classList.toggle("show-links");
});
// fixed navbar & scroll to top button
window.addEventListener("scroll" , function() {
	/*if (window.pageYOffset >  document.getElementById('nav').getBoundingClientRect().height){
		 document.getElementById('nav').classList.add('fixed-nav')
	}
	else {
		document.getElementById('nav').classList.remove('fixed-nav')
	}*/
	if (window.pageYOffset > 600) {
	document.querySelector('.top-link').classList.add('show-link')
}
else {
	document.querySelector('.top-link').classList.remove('show-link')
}
})



