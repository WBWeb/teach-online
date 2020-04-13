function classroomCoursesStudentsCount(courseId) {
  return gapi.client.classroom.courses.students.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.students;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getStudentsCount:", data.length);
      $("#"+courseId+"-students").html(data.length);
    } else {
      $("#"+courseId+"-students").html("0");
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesTeachersCount(courseId) {
  return gapi.client.classroom.courses.teachers.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.teachers;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getTeachersCount:", data.length);
      $("#"+courseId+"-teachers").html(data.length);
    } else {
      $("#"+courseId+"-teachers").html("0");
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesAnnouncementsCount(courseId){
  return gapi.client.classroom.courses.announcements.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.announcements;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getAnnouncementsCount:", data.length);
      $("#"+courseId+"-announcements").html(data.length);
    } else {
      $("#"+courseId+"-announcements").html("0");
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesTopicsCount(courseId){
  return gapi.client.classroom.courses.topics.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.topics;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getTopicsCount:", data.length);
      $("#"+courseId+"-topics").html(data.length);
    } else {
      $("#"+courseId+"-topics").html("0");
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesCourseWorkCount(courseId){
  return gapi.client.classroom.courses.courseWork.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.courseWork;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getCourseWorkCount:", data.length);
      $("#"+courseId+"-courseWork").html(data.length);
    } else {
      $("#"+courseId+"-courseWork").html("0");
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesAliasesCount(courseId) {
  return gapi.client.classroom.courses.aliases.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.aliases;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getAliasesCount:", data.length);
      $("#"+courseId+"-aliases").html(data.length);
    } else {
      $("#"+courseId+"-aliases").html("0");
    }
  },
  function(err) { console.error("Execute error", err); });
}
