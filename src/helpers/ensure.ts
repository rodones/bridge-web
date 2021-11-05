const ensure = <A extends unknown[]>(
  value: unknown,
  ...validValues: A
): A[number] => (validValues.includes(value) ? value : validValues[0]);

export default ensure;
