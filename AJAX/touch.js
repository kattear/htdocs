//mouse events
mouseenter
mouseleave
click
mousedown
mouseup

//touch events
touchstart
touchmove
touchend

//if you don't use touchevents the site still works on the mobile devise.
//All mouse events will also work on touch but there is a performance hit.

//looks for these events in this order. If there is a click event then it will take longer to get to the command
touchstart
mousedown
touchend
mouseup
click

//using jquery mobile is an option

//listen for touchstart in normal jquery
$('.mybutton').click(myFunc);
//does not exist in stardard jquery; jquery mobile only
$('.mybutton').touchstart(myFunc);
//does exist in standard jquery
$('.mybutton').on('click', myFunc);
$('.mybutton').on('touchstart', myFunc); //can make up own events inside parens and will still work
$('.mybutton').on('click touchend', myFunc); //listens for two events and can cause slow down

var Evts = {};

//look for a property in the window if there is touchevents. If yes, use these rules. CAPS significant a Constant and the code should be left.
if ('ontouchstart' in window){
//with modernizer the above would be if (Modernizr.touch) {
	Evts.MOUSEDOWN = 'touchstart';
	Evts.MOUSEUP = 'touchend';
	Evts.CLICK = 'touchend';
	Evts.MOUSEMOVE = 'touchmove';

} else {
	Evts.MOUSEDOWN = 'mousedown';
	Evts.MOUSEUP = 'click';
	Evts.CLICK = 'click';
	Evts.MOUSEMOVE = 'mousemove';
}

$('.myButton').on(Evts.MOUSEDOWN, myFunc);