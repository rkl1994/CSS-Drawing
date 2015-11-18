$("ul li a").click(function (e){
	parent = $(this).parent();
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");

	ink = parent.find(".ink");
	ink.removeClass("animate");

	if(!ink.height() && !ink.width())
	{
		dimension = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: dimension, width: dimension});
	}

    //get the mouse position
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
});