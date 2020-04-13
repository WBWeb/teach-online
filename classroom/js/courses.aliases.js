//courses.aliases - list
function classroomCoursesAliasesList(courseId) {
  return gapi.client.classroom.courses.aliases.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.aliases - delete
function classroomCoursesAliasesDelete(courseId, name) {
  return gapi.client.classroom.courses.aliases.delete({
    "courseId": courseId,
    "alias": "p:"+name
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses.aliases - create
function classroomCoursesAliasesCreate(courseId, name) {
  return gapi.client.classroom.courses.aliases.create({
    "courseId": courseId,
    "resource": {
      "alias": "p:"+name
    }
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
