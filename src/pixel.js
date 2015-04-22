'use strict';

/* Image class */
function Img() {
	var self = this;
	self.img = new Image();
	self.pixels = [];
	self.pixelData = [];
}

Img.prototype.load = function (src, callback) {
	var self = this;
	self.img.src = src;
	self.img.onload = function () {
		self.pixelData = self._getPixelData();
		self.pixels = self._getPixels();
		callback();
	}
};

Img.prototype.indexToXY = function (index) {
	var self = this;
	var width = self.getSize().w;
	var height = self.getSize().h;
	return {
		x: index % width,
		y: (index / width) >> 0
	}
};

Img.prototype.xyToIndex = function (x, y) {
	var self = this;
	return (x + y * self.getSize().w);
};

Img.prototype._getPixelData = function () {
	var self = this,
		canvas = document.createElement('canvas'),
	    context = canvas.getContext('2d');

	canvas.width = self.img.width;
	canvas.height = self.img.height;
	context.drawImage(self.img, 0, 0);
	return context.getImageData(0, 0, canvas.width, canvas.height);
};

Img.prototype._getPixels = function () {
	var self = this,
	    pixels = [];
	var arr = self.pixelData.data;
	for(var i = 0; i < arr.length; i += 4) {
		var pxl = {
			r: arr[i], 
			g: arr[i + 1], 
			b: arr[i + 2], 
			a: arr[i + 3]
		};
		pixels.push(pxl);
	}
	return pixels;
};

Img.prototype.sortPixels = function(fn) {
	var self = this;
	self.pixels.sort(fn);
	self._apply();
};

Img.prototype.sort = function() {
	var self = this;
	var len = self.pixels.length -1;
	for(var i = 0; i < len; i++) {
		self.pixels[i].r;
		self.pixels[i].g;
		self.pixels[i].b += 50;
	}

	self._apply();
};

Img.prototype._apply = function() {
	var self = this;
	var pixelData = [];
	for(var i = 0; i < self.pixels.length; i += 1) {
		pixelData.push(self.pixels[i].r);
		pixelData.push(self.pixels[i].g);
		pixelData.push(self.pixels[i].b);
		pixelData.push(self.pixels[i].a);
	}
	self.pixelData.data.set(pixelData); 
};

Img.prototype.getSize = function () {
	var self = this;
	return {
		w: self.img.width, 
		h: self.img.height
	};
};

Img.prototype.getPixelData = function () {
	var self = this;
	return self.pixelData;
};

module.exports = Img;