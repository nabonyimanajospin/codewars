function betterThanAverage(classPoints, yourPoints) {
  const total = classPoints.reduce((sum, score) => sum + score, 0);
  const average = total / classPoints.length;
  return yourPoints > average;
}