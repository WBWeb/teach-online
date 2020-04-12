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
function classroomCoursesUpdate(courseState,id,name,ownerId,room,section,description,descriptionHeading,teacherFolderID) {
  return gapi.client.classroom.courses.update({
      "id": id,
      "resource": {
        "courseState": courseState,
        "id": id,
        "name": name,
        "ownerId": ownerId,
        "room": room,
        "description": description,
        "section": section,
        "descriptionHeading": descriptionHeading,
        "teacherFolder": {
          "id": teacherFolderID
        }
      }
    })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//courses - create
function classroomCoursesCreate(courseState,id,name,ownerId,room,section,description,descriptionHeading,teacherFolderID) {
  return gapi.client.classroom.courses.create({
      "resource": {
        "courseState": courseState,
        "id": id,
        "name": name,
        "ownerId": ownerId,
        "room": room,
        "description": description,
        "section": section,
        "descriptionHeading": descriptionHeading,
        "teacherFolder": {
          "id": teacherFolderID
        }
      }
    })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
