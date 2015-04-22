/* context class */
function DrawingContext(w, h) {
	var self = this;

	/* setup canvas */
	self.canvas = document.createElement('canvas');
	self.canvas.id = "canvas";
	self.canvas.width = w;
	self.canvas.height = h;

	/* create node */	
	document.body.appendChild(self.canvas);
	/* set drawing context */
	self.ctx = canvas.getContext('2d');
};

DrawingContext.prototype.draw = function(img, x, y) {
	var self = this;
	self.ctx.drawImage(img.img, x, y);
};

DrawingContext.prototype.setPixelData = function (pixelData, img) {
	var self = this;
	this.ctx.putImageData(pixelData, 0, 0, 0, 0, img.getSize().w, img.getSize().h);
}

module.exports = DrawingContext;