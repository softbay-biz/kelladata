export default function removeHeader(states){
	let navbar = document.getElementById('navbar-top').cloneNode(true);
	requestAnimationFrame(()=>{console.log(document.getElementById('navbar-top'));
		document.getElementById('navbar-top').remove();
	});
	states.removeHeader = true;
	return navbar;
}
