const gsd = (first, second) => {
  let tempFirst = first;
  let tempSecond = second;
  if (tempSecond > tempFirst) { const temp = tempFirst; tempFirst = tempSecond; tempSecond = temp; }
  while (tempFirst && tempSecond) {
    const temp = tempSecond;
    tempSecond = tempFirst % tempSecond;
    tempFirst = temp;
  }
  return tempFirst;
};

export default gsd;
