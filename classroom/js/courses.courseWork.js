//courses.courseWork - list
function classroomCoursesCourseWorkList(courseId) {
  return gapi.client.classroom.courses.courseWork.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork - get
function classroomCoursesCourseWorkGet(courseId,id) {
  return gapi.client.classroom.courses.courseWork.get({
    "courseId": courseId,
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork - delete
function classroomCoursesCourseWorkDelete(courseId,id) {
  return gapi.client.classroom.courses.courseWork.delete({
    "courseId": courseId,
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork - ModifyAssignees
function classroomCoursesCourseWorkModifyAssignees(courseId,id,data) {
  return gapi.client.classroom.courses.courseWork.modifyAssignees({
      "courseId": courseId,
      "id": id,
      "resource": data
    })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork - create
function classroomCoursesCourseWorkCreate(courseId,data) {
  return gapi.client.classroom.courses.courseWork.create({
    "courseId":courseId,
    "resource":data
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
