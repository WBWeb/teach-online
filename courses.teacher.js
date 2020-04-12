//courses teacher - create
function coursesTeacherCreate(data) {
    return gapi.client.classroom.courses.teachers.create(data)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

//courses teacher - delete
function coursesTeacherDelete(courseId,userId) {
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

//courses teacher - get
function coursesTeacherGet(courseId,userId) {
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

//courses teacher - list
function execute(courseId,pageSize,pageToken) {
    return gapi.client.classroom.courses.teachers.list({
      "courseId": courseId,
      "pageSize": pageSize,
      "pageToken": pageToken
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }