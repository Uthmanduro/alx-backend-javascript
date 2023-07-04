export default function getListStudentIds(objarray) {
  if (!Array.isArray(objarray)) {
    return [];
  }
  return objarray.map((ids) => ids.id);
}
