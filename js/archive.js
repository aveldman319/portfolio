(function archive(){
	var archiveSection = document.getElementsByClassName('archive')[0];
	var imageCollection = document.getElementsByClassName('piece');

	for (var i = 0; i < imageCollection.length - 1; i++) {
		var thumb = document.createElement('img');
		thumb.src = imageCollection[i].src;
		thumb.setAttribute('class', 'arc_thumb');
		archiveSection.appendChild(thumb);
	};
}());