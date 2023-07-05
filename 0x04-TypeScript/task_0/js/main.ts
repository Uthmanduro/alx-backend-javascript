interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "London"
};

const studentsList: Student[] = [student1, student2];

const table = document.getElementById("myTable");

studentsList.forEach(function(student) {
  const row = table.insertRow();
  const firstNameCell = row.insertCell();
  const locationCell = row.insertCell();
  firstNameCell.innerHTML = student.firstName;
  locationCell.innerHTML = student.location;
});

