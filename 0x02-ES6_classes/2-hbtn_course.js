export default class HolbertonCourse {
  /* eslint-disable no-underscore-dangle */
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (typeof value === 'object') {
      for (const student of value) {
        if (typeof student !== 'string') {
          throw new TypeError(`${student} must be a string`);
        }
      }
    } else {
      throw new TypeError('Student must be array of strings');
    }
    this._students = value;
  }
}
