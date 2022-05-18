const sieveOfEratosfen = (number) => {
  const prime = Array.from({ length: number + 1 }, () => true);

  for (let p = 2; p * p <= number; p += 1) {
    // If prime[p] is not changed, then it is a prime
    if (prime[p] === true) {
      // Update all multiples of p
      for (let i = p * p; i <= number; i += p) prime[i] = false;
    }
  }
  return prime[number];
};

export default sieveOfEratosfen;
