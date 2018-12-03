export default function removeHomePage(states){
	let slider = document.getElementById('slider').cloneNode(true);
	requestAnimationFrame(()=>{
		document.getElementById('slider').remove();
	});
	states.removeHomePage = true;
	return slider;
}
