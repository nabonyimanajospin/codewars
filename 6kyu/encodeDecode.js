function encode(string) {
  return string.replace(/[aeiou]/g, char => 'aeiou'.indexOf(char) + 1);
}

function decode(string) {
  return string.replace(/[1-5]/g, num => 'aeiou'[num - 1]);
}
