describe('selectionSort', function () {

  it('should be a function', function () {

    expect(selectionSort).to.be.a('function');
  });

  it('should return an array', function () {

    expect(selectionSort([1, 2, 3])).to.be.an('array');
  });
});