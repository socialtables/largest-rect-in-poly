var should = require("should");
var largestRect = require("../index");

describe("largest-rect-in-poly", function() {
	it("should find the largest rect in a simple rectangle", function() {
		var simpleRectangle = [[1, 1], [1, 5], [5, 5], [5, 1]];
		var results = largestRect(simpleRectangle);
		should(results).have.lengthOf(3);
		var rect = results[0];
		should(rect).have.property("cx", 3);
		should(rect).have.property("cy", 3);
		should(rect).have.property("width").greaterThan(3.9);
		should(rect).have.property("height").greaterThan(3.9);
		should(rect).have.property("angle", -90);
		var area = results[1];
		should(area).be.greaterThan(15);
	});
});
