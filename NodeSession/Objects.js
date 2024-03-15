
const person= {
        "fname":"Ashok"
    }  
console.log(person);
person.lname = "Kumar"
person.age = 30;
console.log(person);
console.log(person.fname);
console.log(typeof(person));

const student = new Object();
console.log(student);
student.name = "Ashok Kumar";
console.log(student);
student['name'] = "BasavaRaj";
console.log(student);
student['age'] = 30;
console.log(student);