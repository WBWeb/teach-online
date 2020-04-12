//courses.students - list
function coursesStudentsList(courseId) {
  return gapi.client.classroom.courses.students.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.students - get
function coursesStudentsGet(courseId,userId) {
  return gapi.client.classroom.courses.students.get({
    "courseId": courseId,
    "userId": userId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.students - delete
function coursesStudentsDelete(courseId,userId) {
  return gapi.client.classroom.courses.students.delete({
    "courseId": courseId,
    "userId": userId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.students - create
function coursesStudentsCreate(data) {
  return gapi.client.classroom.courses.students.create(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
