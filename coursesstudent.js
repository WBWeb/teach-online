//courses student create
function coursesStudentCreate(data) {
    return gapi.client.classroom.courses.students.create(data)
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

//courses student delete
function coursesStudentDelete(courseId,userId) {
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

//courses student get
function coursesStudentGet(courseId,userId) {
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

//courses student list
function coursesStudentList(courseId,pageSize,pageToken) {
    return gapi.client.classroom.courses.students.list({
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