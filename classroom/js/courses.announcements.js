//courses.announcements - list
function classroomCoursesAnnouncementsList(courseId) {
  return gapi.client.classroom.courses.announcements.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.announcements - get
function classroomCoursesAnnouncementsGet(courseId,id) {
  return gapi.client.classroom.courses.get({
    "courseId": courseId,
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.announcements - delete
function classroomCoursesAnnouncementsDelete(courseId,id) {
  return gapi.client.classroom.courses.announcements.delete({
    "courseId": courseId,
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.announcements - ModifyAssignees
function classroomCoursesAnnouncementsModifyAssignees(courseId,id,data) {
  return gapi.client.classroom.courses.announcements.modifyAssignees({
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

//courses.announcements - create
function classroomCoursesAnnouncementsCreate(courseId,data) {
  return gapi.client.classroom.courses.announcements.create({
    "courseId":courseId,
    "resource":data
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
