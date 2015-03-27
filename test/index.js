var should = require("should");
var findLargestRect = require("../index");
var testPolygons = require("./polygons.json");

describe("largest-rect-in-poly", function() {
	it("should find the largest rectangle in a triangle",function(){
		// diffcult to calculate triangles center.
		var polygon =[[0,0],[0,30],[40,0]];
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx");
		rectangle[0].should.have.property("cy");
		rectangle[0].should.have.property("width");
		rectangle[0].should.have.property("height");
		var rectArea = rectangle[1];
		rectArea.should.be.within(250,300);
	});
	it("should find the largest rectangle in a perfect square",function(){
		var polygon =[[0,0],[0,1000],[1000,1000],[1000,0]];
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx",500);
		rectangle[0].should.have.property("cy",500);
		var width = rectangle[0].width;
		var height = rectangle[0].height;
		width.should.be.within(999,1001);
		height.should.be.within(999,1001);

	});
	it("should find the largest rectangle in a perfect rectangle",function(){
		var polygon =[[0,0],[0,100],[50,100],[50,0]];
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx",25);
		rectangle[0].should.have.property("cy",50);
		rectangle[0].should.have.property("width");
		rectangle[0].should.have.property("height");
		var width = rectangle[0].width;
		var height = rectangle[0].height;
		width.should.be.within(99,101);
		height.should.be.within(49,51);

	});
	it("should find the largest rectangle in a not very complex polygon",function(){
		var polygon = testPolygons.simple;
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx");
		rectangle[0].should.have.property("cy");
		rectangle[0].should.have.property("width");
		rectangle[0].should.have.property("height");
		var rectArea = rectangle[1];
		rectArea.should.be.within(330000,360000);
	});
	it("should find largest rectangle in a medium complex polygon",function(){
		var polygon = testPolygons.medium;
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx");
		rectangle[0].should.have.property("cy");
		rectangle[0].should.have.property("width");
		rectangle[0].should.have.property("height");
		var rectArea = rectangle[1];
		rectArea.should.be.within(79000,82000);
	});
	it("should find largest rectangle in a pretty complex polygon",function(){
		var polygon = testPolygons.complex;
		var rectangle = findLargestRect(polygon);
		rectangle[0].should.have.property("cx");
		rectangle[0].should.have.property("cy");
		rectangle[0].should.have.property("width");
		rectangle[0].should.have.property("height");
		var rectArea = rectangle[1];
		rectArea.should.be.within(190000,220000);
	});
});
