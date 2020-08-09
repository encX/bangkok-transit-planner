export function getRandomIntInRange(to: number, offset = 0) {
  const iTo = Math.floor(to);
  const from = Math.floor(offset);
  const range = Math.abs(iTo - from);
  return Math.floor(Math.random() * range + from);
}
