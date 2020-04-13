//courses.teachers - list
function coursesTeachersList(courseId) {
  return gapi.client.classroom.courses.teachers.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.teachers - get
function coursesTeachersGet(courseId,userId) {
  return gapi.client.classroom.courses.teachers.get({
    "courseId": courseId,
    "userId": userId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.teachers - delete
function coursesTeachersDelete(courseId,userId) {
  return gapi.client.classroom.courses.teachers.delete({
    "courseId": courseId,
    "userId": userId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.teachers - create
function coursesTeachersCreate(data) {
  return gapi.client.classroom.courses.teachers.create(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
