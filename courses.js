var Course = function(name, department, credits, days, block){
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = [];
  this.days = days;
  this.block = block;
};

Course.prototype.add_student = function(student){
  student.enroll(this);
};

Course.prototype.conflicts_with = function(other_course){
  if(this.block === other_course.block){
    for(i = 0; i < other_course.days.length; i++){
      if(this.days.indexOf(other_course.days[i]) !== -1) {
        return true
      };
    };
  };
  return false
};

module.exports = Course;
