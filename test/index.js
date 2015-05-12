var should = require("should");
var findLargestRect = require("../index");
var testPolygons = require("./polygons.json");

describe("largest-rect-in-poly", function() {
	it("should find the largest rectangle in a triangle", function(){
		// diffcult to calculate triangles center.
		var polygon = [[0, 0], [0, 30], [40, 0]];
		var rectangle = findLargestRect(polygon);
		should(rectangle[0]).have.property("cx");
		should(rectangle[0]).have.property("cy");
		should(rectangle[0]).have.property("width");
		should(rectangle[0]).have.property("height");
		var rectArea = rectangle[1];
		rectArea.should.be.within(240, 300);
	});
	it("should find the largest rectangle in a perfect square", function(){
		var polygon = [[0, 0], [0, 1000], [1000, 1000], [1000, 0]];
		var rectangle = findLargestRect(polygon);
		should(rectangle[0]).have.property("cx", 500);
		should(rectangle[0]).have.property("cy", 500);
		var width = rectangle[0].width;
		var height = rectangle[0].height;
		should(width).be.within(980, 1020);
		should(height).be.within(980, 1020);

	});
	it("should find the largest rectangle in a perfect rectangle", function(){
		var polygon = [[0, 0], [0, 100], [50, 100], [50, 0]];
		var rectangle = findLargestRect(polygon);
		should(rectangle[0]).have.property("cx", 25);
		should(rectangle[0]).have.property("cy", 50);
		should(rectangle[0]).have.property("width");
		should(rectangle[0]).have.property("height");
		var width = rectangle[0].width;
		var height = rectangle[0].height;
		width.should.be.within(99, 101);
		height.should.be.within(49, 51);

	});

	var variants = [
		{
			polygon: "simple",
			bounds: [300000, 360000]
		}, {
			polygon: "medium",
			bounds: [70000, 82000]
		}, {
			polygon: "complex",
			bounds: [180000, 220000]
		}
	];

	variants.forEach(function(v) {
		it("should find the largest rectangle in a " + v.polygon + " polygon", function() {
			var polygon = testPolygons[v.polygon];
			var rectangle = findLargestRect(polygon);
			should(rectangle[0]).have.property("cx");
			should(rectangle[0]).have.property("cy");
			should(rectangle[0]).have.property("width");
			should(rectangle[0]).have.property("height");
			var rectArea = rectangle[1];
			rectArea.should.be.within(v.bounds[0], v.bounds[1]);
		});
	});
});
