var pixel = require('./pixel');
var cnv = require('./context')

var img = new pixel();

img.load('night.jpg', function () { 
	/*	
	img.sortPixels(function (a, b) {
		if(a.b ===  b.b) { return 1; }
		if (a.g < 200) { return -1; }
		return 0;
	});
	*/
	
	img.sort();
	var a = img.indexToXY(979);
	console.log(a);
	var b = img.xyToIndex(a.x, a.y);
	console.log(b);
	var ctx = new cnv(img.getSize().w, img.getSize().h);
	ctx.setPixelData(img.getPixelData(), img);
});