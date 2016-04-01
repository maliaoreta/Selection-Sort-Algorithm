describe('selectionSort', function () {

  it('should be a function', function () {

    expect(selectionSort).to.be.a('function');
  });

  it('should return an array', function () {

    expect(selectionSort([1, 2, 3])).to.be.an('array');
  });

  it('should return the sorted array', function () {

    expect(selectionSort([3, 1, 4, 2])).to.deep.equal([1, 2, 3, 4]);
  })
});