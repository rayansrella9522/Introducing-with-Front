//이화빈 테스트. 

var setInterval_scroll = setInterval(scroll_loc,10);
var scroll_y = window.scrollY;
function scroll_loc(){
	scroll_y = window.scrollY;
	if(scroll_y >= 5000){
		alert('this is scroll_event testing from : 이화빈');
	}
	if(scroll_y >= 5000){
		clearInterval(setInterval_scroll);
	}
}

