function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
}

const student1 = new Student("Maxim", "man", "36");
const student2 = new Student("Konstantin", "man", "34");
const student3 = new Student("Elena", "male", "32");


Student.prototype.setSubject = function (subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
	if (this.marks === undefined) {
		this.marks = [];
		this.marks.push(mark)
	} else {
		this.marks.push(mark)
	}
}

Student.prototype.addMarks = function (mark1, mark2, mark3, ...marks) {
	if (this.marks === undefined) {
		this.marks = [];
		this.marks.push(mark1, mark2, mark3, ...marks)
	} else {
		this.marks.push(mark1, mark2, mark3, ...marks)
	}
}

Student.prototype.getAverage = function (arrayMark) {
	
	 return this.marks.reduce((a, b) => (a + b)) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject
  delete this.marks
  this.excluded = reason;
}
