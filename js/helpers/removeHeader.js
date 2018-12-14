export default function removeHeader(states){
	let navbar = document.getElementById('navbar-top').cloneNode(true);
	requestAnimationFrame(()=>{
		document.getElementById('navbar-top').remove();
	});
	states.removeHeader = true;
	return navbar;
}
