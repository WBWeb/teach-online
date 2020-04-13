//Course counters Functionality

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

function getCourseDataCounts(courseId) {
  classroomCoursesStudentsCount(courseId);
  classroomCoursesTeachersCount(courseId);

  classroomCoursesAnnouncementsCount(courseId);
  classroomCoursesCourseWorkCount(courseId);
  classroomCoursesTopicsCount(courseId);
  classroomCoursesAliasesCount(courseId);
}

//Course Update Functionality
function modalEditCourse(courseID) {
  console.log('Modal Clicked');
  $('#apimodal').empty().html(initModalDOM());
  $('#apimodaltitle').html('Edit Course');

  print='<div class="row">'
        +'<div class="col-md-12">'
          +'<div class="form-group">'
            +'<label>Course Name</label>'
            +'<input type="text" max="50" value="" id="courseName" class="form-control">'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row">'
        +'<div class="col-md-4">'
          +'<div class="form-group">'
            +'<label>Section</label>'
            +'<input value="" type="text" max="10" id="courseSection" class="form-control">'
          +'</div>'
        +'</div>'
        +'<div class="col-md-4">'
          +'<div class="form-group">'
            +'<label>Room</label>'
            +'<input value="" type="text" max="10" id="courseRoom" class="form-control">'
          +'</div>'
        +'</div>'
        +'<div class="col-md-4">'
          +'<div class="form-group">'
            +'<label>Course State</label>'
            +'<select id="courseState" class="form-control">'
              +'<option>ACTIVE</option>'
              +'<option>ARCHIVED</option>'
              +'<option>PROVISIONED</option>'
              +'<option>DECLINED</option>'
              +'<option>SUSPENDED</option>'
            +'</select>'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row">'
        +'<div class="col-md-12">'
          +'<div class="form-group">'
            +'<label>Course Description</label>'
            +'<input value="" type="text" max="200" id="courseDescriptionHeading" class="form-control">'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row">'
        +'<div class="col-md-12 text-center">'
          +'<div class="form-group">'
            +'<input type="button" onclick="initclassroomCoursesUpdate('+courseID+')" value="Update" class="btn btn-primary btn-md" >'
          +'</div>'
        +'</div>'
      +'</div>';
  $('#apimodalform').empty().html(print);
  console.log('Modal Form print success');
  classroomCoursesGetFormValue(courseID);
  $('#apimodal').modal('show');
}

function initclassroomCoursesUpdate(courseID) {
  classroomCoursesUpdate(courseID,classroomCoursesFormToDataObject());
}

function classroomCoursesFormToDataObject() {
  data = {
    name: $("#courseName").val(),
    section: $("#courseSection").val(),
    room: $("#courseRoom").val(),
    courseState: $("#courseState").val(),
    descriptionHeading: $("#courseDescriptionHeading").val()
  }
  return data;
}

function classroomCoursesGetFormValue(id) {
  return gapi.client.classroom.courses.get({"id": id})
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);

    $("#courseName").val(response.result.name);
    $("#courseSection").val(response.result.section);
    $("#courseRoom").val(response.result.room);
    $("#courseState").val(response.result.courseState);
    $("#courseDescriptionHeading").val(response.result.descriptionHeading);
    console.log('Form value put success');
  },
  function(err) { console.error("Execute error", err); });
}

function initModalDOM() {
  console.log('Modal Init Success');
  print='<div class="modal-dialog" role="document">'
    +'<div class="modal-content">'
      +'<div class="modal-header">'
      +'<h5 class="modal-title" id="apimodaltitle"></h5>'
      +'<button type="button" class="close" data-dismiss="modal" aria-label="Close">'
          +'<i class="fa fa-close"></i>'
      +'</button>'
      +'</div>'
      +'<div class="modal-body">'
        +'<form id="apimodalform" onsubmit="return false;"></form>'
      +'</div>'
      +'<div class="modal-footer">'
        +'<button type="button" class="btn btn-danger btn-sm btn btn-link text-white" data-dismiss="modal">Close</button>'
      +'</div>'
    +'</div>'
  +'</div>';
  return print;
}


function classroomCoursesUpdate(id,data) {
  return gapi.client.classroom.courses.update({
      "id": id,
      "resource": data
    })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
    Toast.fire({
      title:"Update Suceess",
      icon: "success"
    });
    $('#apimodal').modal('hide');
    initCourses();
  },
  function(err) { console.error("Execute error", err); });
}
