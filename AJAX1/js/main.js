Modernizr.load([
		{
			test: Modernizr.history,
			nope: 'js/history.js',
			complete: function (){
				init();
			}
		}
	]);


function init(){
	// console.log ("hello");
	$('#page2').click(getPage2);
}

function getPage2(event){
	event.preventDefault();
	// console.log("you're not going anywhere!");
	$.get('page2.html', updateContent);
}

function updateContent(response){
	// console.log(response);
	var $html = $('<html>');
	$html.append(response);

	var $content = $html.find('#container').html();
	$('#container').html($content);
	// console.log($html);
}