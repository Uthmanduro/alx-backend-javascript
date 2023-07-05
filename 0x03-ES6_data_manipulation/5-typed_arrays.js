export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const int8 = new Int8Array(buffer);
  int8[position] = value;
  if (int8[position] === undefined) {
    throw new Error('Position outside range');
  }
  return buffer;
}
