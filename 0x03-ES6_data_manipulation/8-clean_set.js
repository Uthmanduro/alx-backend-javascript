export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const returnstring = [];
  set.forEach((val) => {
    if (val.startsWith(startString)) {
      returnstring.push(val.substring(startString.length, val.length));
    }
  });
  return returnstring.join('-');
}
