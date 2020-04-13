//courses.topic - list
function coursesTopicList(courseId) {
  return gapi.client.classroom.courses.topics.list({
    "courseId": courseId
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

//courses.topic - create
function coursesTopicCreate(courseId,name) {
  return gapi.client.classroom.courses.topics.create({
    "courseId": courseId,
    "resource": {
      "name": name
    }
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
