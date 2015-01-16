// require('courses.js')

function Student(fname, lname){
  this.fname = fname;
  this.lname = lname;
  this.courses = [];
};

Student.prototype.name = function(){
  return this.fname + ' ' + this.lname;
};

Student.prototype.enroll = function(course){
  if(this.courses.indexOf(course) !== -1) return;
  if(this.has_conflict(course)){
    throw course.name + " conflicts with " + this.has_conflict(course).name;
  }
  this.courses.push(course);
  course.students.push(this);
};

Student.prototype.courseLoad = function(){
  var load = {};
  this.courses.forEach(function(course){
    if(!load[course.department]) load[course.department] = 0;
    load[course.department] += course.credits;
  });

  return load
};

Student.prototype.has_conflict = function(other_course){
  for(i = 0; i < this.courses.length; i++){
    if(this.courses[i].conflicts_with(other_course)) return this.courses[i];
  };
  return false;
};

var Course = require('./courses.js')

c1 = new Course('cs 101', 'engineering', 4, ["Mon", "Wed", "Fri"], 1);
c2 = new Course('cs 102', 'engineering', 4, ["Tue", "Thu"], 1);
c3 = new Course('writing 101', 'english', 4, ["Mon", "Wed", "Fri"], 2);
c4 = new Course('chem 101', 'science', 4, ["Mon", "Wed", "Fri"], 1);

s1 = new Student("Joe", "Scholar");

s1.enroll(c1);
s1.enroll(c2);
c3.add_student(s1);
c4.add_student(s1);


console.log(s1.name());
console.log(s1.courseLoad());
