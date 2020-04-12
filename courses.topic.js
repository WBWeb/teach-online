//courses.topic - create
function coursesTopicCreate(courseId,resourceName) {
    return gapi.client.classroom.courses.topics.create({
      "courseId": courseId,
      "resource": {
        "name": resourceName
      }
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

//courses.topic - delete
function coursesTopicDelete(courseId,id) {
    return gapi.client.classroom.courses.topics.delete({
      "courseId": courseId,
      "id": id
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

//courses.topic - get
function coursesTopicGet(courseId,id) {
    return gapi.client.classroom.courses.topics.get({
      "courseId": courseId,
      "id": id
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }

//courses.topic - list
function execute(courseId,pageSize,pageToken) {
    return gapi.client.classroom.courses.topics.list({
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