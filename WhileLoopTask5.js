function enrollStudents() {
    const maxCapacity = 100;
    let currEnrollment = 0;
  
    while (currEnrollment < maxCapacity) {
      const studentDetails = prompt(Enter your name, email, and any other relevant information. (e.g. Name: XYZ, Email: xyz@example.com)  Note: Enrollment is limited to ${maxCapacity} students.);
  
      if (studentDetails === null) {
        break;
      }
  
      console.log(Enrolled ${studentDetails});
  
      currEnrollment++;
  
      if (currEnrollment === maxCapacity) {
        console.log(Enrollment is closed. The course has reached its maximum capacity of ${maxCapacity} students.);
      }
    }
  }

  enrollStudents();