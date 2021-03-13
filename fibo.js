function fibo(n) {
  let n1 = 1;
  let n2 = 1;
  let n3 = 2;
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else if (n == 2) {
    return 1;
  }
  while (n - 2 > 0) {
    n3 = n1 + n2;
    n1 = n2;
    n2 = n3;
    n--;
  }
  return n3;
}

console.log(fibo(4));
