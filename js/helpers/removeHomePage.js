export default function removeHomePage(states){
	let slider = document.getElementById('slider').cloneNode(true);
	document.getElementById('slider').remove();
	states.removeHomePage = true;
	return slider;
}