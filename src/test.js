const connect = (first, third = null) => (second) => {
  console.log(first,third, second);
};


connect(1)(2);
