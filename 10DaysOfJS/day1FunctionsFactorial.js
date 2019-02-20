var answer = 1;

function factorial(number) {
  while (number >= 1) {
    answer *= number;
    number -= 1;
  }
  if (number === 0) {
    return(answer);
  }
}