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
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = value;
    }
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = value;
    }
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (typeof Students === 'object') {
      for (const student in Students) {
        if (typeof student !== 'string') {
          throw new TypeError('Students must be an array');
        }
      }
    } else {
      throw new TypeError('Student must be array of strings');
    }
    this._students = value;
  }
  /* eslint-disable no-underscore-dangle */
}
