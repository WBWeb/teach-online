//courses.courseWork.studentSubmissions - list
function classroomCoursesCourseWorkStudentSubmissionsList(courseId,courseWorkId) {
  return gapi.client.classroom.courses.courseWork.studentSubmissions.list({
    "courseId": courseId,
    "courseWorkId": courseWorkId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork.studentSubmissions - get
function classroomCoursesCourseWorkStudentSubmissionsGet(courseId,courseWorkId,id) {
  return gapi.client.classroom.courses.get({
    "courseId": courseId,
    "courseWorkId": courseWorkId,
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}


//courses.courseWork.studentSubmissions - ModifyAttachments
function classroomCoursesCourseWorkStudentSubmissionsModifyAttachments(courseId,courseWorkId,id,data) {
  return gapi.client.classroom.courses.courseWork.studentSubmissions.modifyAttachments({
      "courseId": courseId,
      "courseWorkId": courseWorkId,
      "id": id,
      "resource": data
    })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork.studentSubmissions - turnIn
function classroomCoursesCourseWorkStudentSubmissionsTurnIn(courseId,courseWorkId,id,data) {
  return gapi.client.classroom.courses.courseWork.studentSubmissions.turnIn({
      "courseId": courseId,
      "courseWorkId": courseWorkId,
      "id": id,
      "resource": data
    })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork.studentSubmissions - return
function classroomCoursesCourseWorkStudentSubmissionsReturn(courseId,courseWorkId,id,data) {
  return gapi.client.classroom.courses.courseWork.studentSubmissions.return({
      "courseId": courseId,
      "courseWorkId": courseWorkId,
      "id": id,
      "resource": data
    })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.courseWork.studentSubmissions - reclaim
function classroomCoursesCourseWorkStudentSubmissionsReclaim(courseId,courseWorkId,id,data) {
  return gapi.client.classroom.courses.courseWork.studentSubmissions.reclaim({
      "courseId": courseId,
      "courseWorkId": courseWorkId,
      "id": id,
      "resource": data
    })
    .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
