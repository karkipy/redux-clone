const connect = (first, third = null) => (second) => {
  console.log(first, second);
};


connect(1)(2);
