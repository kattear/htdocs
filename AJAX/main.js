//tooltip; single tooltip
var $tooltip = $('<div class="tooltip" />');
var timer;
var $this;

//appear on hover
$('li').mouseenter(getData).mouseleave(hideTooltip);

//retreive movie data from server
function getData(){
	$this = $(this);
	var movie = $this.attr( 'id');
	// console.log(movie);
	var moviePath = 'tooltips/' + movie + '.html';

	timer = setTimeout(function(){
	// $.get(moviePath, function(response){
	// 	console.log(response);

	// 	});

	//show upon successful retrieval
	$.get(moviePath, showTooltip);
	}, 500);
}

//hides tooltip
function hideTooltip(){
	clearTimeout(timer);
	$tooltip.detach();
}

//show the tooltip
function showTooltip(response){
	var offset = $this.offset();

	$tooltip.css({
		top: offset.top + 10,
		left: offset.left + 100
	})
		.html(response);

		$this.append($tooltip);
}