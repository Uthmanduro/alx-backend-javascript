export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const returnstring = [];
  set.forEach((val) => {
    if (val.startsWith(startString)) {
      returnstring.push(val.slice(startString.length));
    }
  });
  return returnstring.join('-');
}
