var q = document.getElementsByClassName('question-feed');
var f = document.getElementsByTagName('footer');

q[0].style.display = "none";

for (var i = 0; i < f.length; i++) {
	f[i].style.display = "none";
}
