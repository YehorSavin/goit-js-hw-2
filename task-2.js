const calculateEngravingPrice = function (message, pricePerWord) {
  let b = message.split(` `);
  // console.log(b);
  let c = b.length;
  // console.log(c);
  let d = c * pricePerWord;
  // console.log(d);
  return d;
};


console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
);

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
);