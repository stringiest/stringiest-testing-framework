it('2 + 2 is equal to 4', function(){
  expect(2 + 2).toEqual(4);
});

it('2 + 3 is equal to 4', function(){
  expect(2 + 3).toEqual(4);
});

it('is an array', function(){
  expect([]).toBeAnArray();
});

it('2 + 2 is equal to 4', function(){
  expect(2 + 2 === 4).isTrue();
});
