describe("Test Fizzbuzz", function() {
	var fizzbuzz;

	beforeEach(function() {
		fizzbuzz = new Fizzbuzz();
	});

	it('should return fizz when parameter is 3', function() {
		expect(fizzbuzz.convert(3)).toEqual('fizz');
	});

	it('should return 2 when parameter is 2', function() {
		expect(fizzbuzz.convert(2)).toEqual(2);
	});

	it('should return buzz when parameter is 5', function() {
		expect(fizzbuzz.convert(5)).toEqual('buzz');
	});
	it('should return 4 when parameter is 4', function() {
		expect(fizzbuzz.convert(4)).toEqual(4);
	});
	it('should return fizzbuzz when number is 15', function() {
		expect(fizzbuzz.convert(15)).toEqual('fizzbuzz')	;
	});
	it('should return fizz when number is 6', function() {
		expect(fizzbuzz.convert(6)).toEqual('fizz');
	});
	it('should return buzz if number is mult of 5', function() {
		expect(fizzbuzz.convert(25)).toEqual('buzz');
	});
	it('should return fizz when number is 9', function() {
		expect(fizzbuzz.convert(9)).toEqual('fizz');
	});
	it('should return fizzbuzz when number is 30', function() {
		expect(fizzbuzz.convert(30)).toEqual('fizzbuzz');
	});
	it('should return fizz when number is 13', function() {
		expect(fizzbuzz.convert(13)).toEqual('fizz');
	});
	it('hould return fizz when number is 34', function() {
		expect(fizzbuzz.convert(34)).toEqual('fizz');
	});
	it('should return fizz when number is 43', function() {
		expect(fizzbuzz.convert(43)).toEqual('fizz');
	});
	it('should return buzz when number is 56', function() {
		expect(fizzbuzz.convert(56)).toEqual('buzz');
		
	});
	it('should return buzz if number is 58', function() {
		expect(fizzbuzz.convert(58)).toEqual('buzz');
	});
	it('should return fizzbuzz when number is 35 ', function() {
		expect(fizzbuzz.convert(35)).toEqual('fizzbuzz');
	});
});