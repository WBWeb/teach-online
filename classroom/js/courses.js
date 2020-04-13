//courses - list
function classroomCoursesList() {
  return gapi.client.classroom.courses.list({})
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses - get
function classroomCoursesGet(id) {
  return gapi.client.classroom.courses.get({"id": id})
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses - delete
function classroomCoursesDelete(id) {
  return gapi.client.classroom.courses.delete({"id": id})
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses - update
function classroomCoursesUpdate(id,data) {
  return gapi.client.classroom.courses.update({
      "id": id,
      "resource": data
    })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses - create
function classroomCoursesCreate(data) {
  return gapi.client.classroom.courses.create({"resource":data})
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
