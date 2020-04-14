//Course counters Functionality

function classroomCoursesStudentsCount(courseId) {
  return gapi.client.classroom.courses.students.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    data=response.result.students;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getStudentsCount:", data);
      console.log(courseId+"-getStudentsCount:", data.length);
      console.log(data+"-getStudentsCount:", data.length);
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
      console.log("data-getTeachersCount:", data);
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
      console.log("data-getAnnouncementsCount:", data);
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
      console.log("data-getTopicsCount:", data);
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
      console.log("data-getCourseWorkCount:", data);
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
      console.log("data-getAliasesCount:", data);
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

function initclassroomCoursesUpdate(courseID) {
  classroomCoursesUpdate(courseID,classroomCoursesFormToDataObject());
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
      title:"Course Update Success",
      icon: "success"
    });
    $('#apimodal').modal('hide');
    initCourses();
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

function initDOM() {
  print='<div class="container-login100" style="background-image: url('+"'"+'../images/bg-01.jpg'+"'"+');">'
          +'<div class="course-container p-4" >'
            +'<div class="row">'
              +'<div class="col text-left">'
                +'<span class="login100-form-title p-b-10" style="text-align: left;">Classroom Courses</span>'
              +'</div>'
              +'<div class="col-2">'
                +'<div class="flex-c" style="justify-content: flex-end;">'
                  +'<div class="dropleft">'
                    +'<button class="login100-button-a" data-toggle="dropdown" title="Settings" type="button" id="dropdownCoursesMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-ellipsis-v"></i></button>'
                    +'<div class="dropdown-menu" aria-labelledby="dropdownCoursesMenu">'
                      +'<a class="dropdown-item" href="javascript:void(0)" onclick="modalAddCourse()">Add New Course</a>'
                      +'<a class="dropdown-item" href="javascript:void(0)" onclick="modalJoinCourse()">Join New Course</a>'
                    +'</div>'
                  +'</div>'
                +'</div>'
              +'</div>'
            +'</div>'
            +'<div class="row p-t-30 p-b-30" id="course-container" style="max-height:500px; overflow:scroll">'
            +'</div>'
          +'</div>'
        +'</div>';

  return print;
}


//Course Update Functionality
function modalAddCourse() {
  console.log('Modal Clicked');
  $('#apimodal').empty().html(initModalDOM());
  $('#apimodaltitle').html('Add Course');

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
            +'<input type="button" onclick="initclassroomCoursesAdd()" value="Add Course" class="btn btn-primary btn-md" >'
          +'</div>'
        +'</div>'
      +'</div>';
  $('#apimodalform').empty().html(print);
  console.log('Modal Form print success');
  $('#apimodal').modal('show');
}

function classroomCoursesFormToDataObject() {
  console.log('Modal Form Data to object success');
  var current = gapi.auth2.getAuthInstance().currentUser.get();
  data = {
    name: $("#courseName").val(),
    ownerId: current.Pt.MU,
    section: $("#courseSection").val(),
    room: $("#courseRoom").val(),
    courseState: $("#courseState").val(),
    descriptionHeading: $("#courseDescriptionHeading").val()
  }
  return data;
}

function initclassroomCoursesAdd() {
  console.log('Modal Form init Submitted');
  classroomCoursesAdd(classroomCoursesFormToDataObject());
}


function classroomCoursesAdd(data) {
  return gapi.client.classroom.courses.create({"resource":data})
  .then(function(response) {
    console.log('Modal Form Submitted');
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
    Toast.fire({
      title:"Course Add Success",
      icon: "success"
    });
    $('#apimodal').modal('hide');
    initCourses();
  },
  function(err) { console.error("Execute error", err); });
}
