export const weakMap = new WeakMap();

export default function queryAPI(endpoint) {
  weakMap.set(endpoint, endpoint);
  let count = 0;
  if (weakMap.get(endpoint)) {
    count++;
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
  return count;
}
