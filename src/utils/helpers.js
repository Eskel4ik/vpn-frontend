export function parseTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${date.getDay()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}
