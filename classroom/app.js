//Course counters Functionality
var coursesArray = [];
var coursesTeachersArray = [];
var coursesStudentsArray = [];
var coursesAnnouncementsArray = [];
var coursescourseWorkArray = [];
var coursescourseWorkStudentSubmissionsArray = [];
var coursesTopicsArray = [];
var coursesAliasesArray = [];

function classroomCoursesStudents(courseId) {
  return gapi.client.classroom.courses.students.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.students;


    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getStudentsCount:", data);
      console.log(courseId+"-getStudentsCount:", data.length);
      $("#"+courseId+"-students").html(data.length);
      for(i=0; i<data.length; i++){
        coursesStudentsArray.push(data[i]);
        print+='<p class="popUp" onclick="popStudentDetails('+data[i].courseId+','+data[i].profile.id+')"><img src="'+data[i].profile.photoUrl+'" class="img-card img-very-small"><span>'+data[i].profile.name.fullName+'<span></p>';
      }
    } else {
      $("#"+courseId+"-students").html("0");
    }

    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddStudent('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add Student</span>';
    $("#accordion-body-list-"+courseId+"-students").html(print);

  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesTeachers(courseId) {
  return gapi.client.classroom.courses.teachers.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.teachers;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getTeachersCount:", data);
      console.log(courseId+"-getTeachersCount:", data.length);
      $("#"+courseId+"-teachers").html(data.length);

      for(i=0; i<data.length; i++){
        coursesTeachersArray.push(data[i]);
        print+='<p class="popUp" onclick="popTeacherDetails('+data[i].courseId+','+data[i].profile.id+')"><img src="'+data[i].profile.photoUrl+'" class="img-card img-very-small">'+data[i].profile.name.fullName+'</p>';
      }

    } else {
      $("#"+courseId+"-teachers").html("0");
    }
    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddTeacher('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add Teacher</span>';
    $("#accordion-body-list-"+courseId+"-teachers").html(print);
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesAnnouncements(courseId){
  return gapi.client.classroom.courses.announcements.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.announcements;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getAnnouncementsCount:", data);
      console.log(courseId+"-getAnnouncementsCount:", data.length);
      $("#"+courseId+"-announcements").html(data.length);

      for(i=0; i<data.length; i++){
        coursesAnnouncementsArray.push(data[i]);
        print+='<p class="popUp" onclick="popAnouncement('+data[i].courseId+','+data[i].id+')"> '+(i+1)+' - '+data[i].id+' - '+data[i].state+'</p>';
      }
    } else {
      $("#"+courseId+"-announcements").html("0");
    }
    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddAnnouncement('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add Announcement</span>';

    $("#accordion-body-list-"+courseId+"-announcements").html(print);

  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesTopics(courseId){
  return gapi.client.classroom.courses.topics.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.topic;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getTopicsCount:", data);
      console.log(courseId+"-getTopicsCount:", data.length);
      $("#"+courseId+"-topics").html(data.length);

      for(i=0; i<data.length; i++){
        coursesTopicsArray.push(data[i]);
        print+='<p class="popUp" onclick="Pop.fire({title:'+"'"+data[i].name+"'"+', text:'+"' Updated: "+data[i].updateTime+"'"+', icon: '+"'"+'success'+"'"+' })"> '+(i+1)+' - '+data[i].topicId+'</p>';
      }
    } else {
      $("#"+courseId+"-topics").html("0");
    }
    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddTopic('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add Topic</span>';
    $("#accordion-body-list-"+courseId+"-topics").html(print);

  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesCourseWork(courseId){
  return gapi.client.classroom.courses.courseWork.list({
    "courseId": courseId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.courseWork;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getCourseWorkCount:", data);
      console.log(courseId+"-getCourseWorkCount:", data.length);
      $("#"+courseId+"-courseWork").html(data.length);

      for(i=0; i<data.length; i++){
        coursescourseWorkArray.push(data[i]);
        classroomCoursesCourseWorkStudentSubmissions(courseId,data[i].id);
        print+='<p class="popUp" onclick="popCourseWork('+data[i].id+')" data-toggle="tooltip" title="State: '+data[i].state+'"> '+(i+1)+' - '+data[i].id+' - '+data[i].workType+'</p>';
      }
    } else {
      $("#"+courseId+"-courseWork").html("0");
    }
    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddCourseWork('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add CourseWork</span>';
    $("#accordion-body-list-"+courseId+"-courseWork").html(print);

  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesCourseWorkStudentSubmissions(courseId,courseWorkId){
  return gapi.client.classroom.courses.courseWork.studentSubmissions.list({
    "courseId": courseId,
    "courseWorkId": courseWorkId
  }).then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    data=response.result.studentSubmissions;
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log("data-getCourseWorkStudentSubmissionsCount:", data);
      console.log(courseId+"-getCourseWorkStudentSubmissionsCount:", data.length);

      for(i=0; i<data.length; i++){
        coursescourseWorkStudentSubmissionsArray.push(data[i]);
      }
    }
  },function(err) { console.error("Execute error", err); });
}

function classroomCoursesAliases(courseId) {
  return gapi.client.classroom.courses.aliases.list({
    "courseId": courseId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    print="";
    console.log("Aliases reponse", response);
    data=response.aliases;

    console.log("data-getAliasesCount:", data);
    if (typeof data !== 'undefined' && data.length > 0) {
      console.log(courseId+"-getAliasesCount:", data.length);
      $("#"+courseId+"-aliases").html(data.length);

      for(i=0; i<data.length; i++){
        coursesAliasesArray.push(data[i]);
        print+='<p class="popUp" >'+data[i].alias+'</p>';
      }
    } else {
      $("#"+courseId+"-aliases").html("0");
    }
    print+='<span class="btn btn-info btn-sm my-2" onclick="modalCourseAddAlias('+courseId+')" style="padding: 2px 10px 2px 10px;text-align: center;">Add Alias</span>';
    $("#accordion-body-list-"+courseId+"-aliases").html(print);

  },
  function(err) { console.error("Execute error", err); });
}

function getCourseData(courseId) {
  classroomCoursesStudents(courseId);
  classroomCoursesTeachers(courseId);
  classroomCoursesAnnouncements(courseId);
  classroomCoursesCourseWork(courseId);
  classroomCoursesTopics(courseId);
  classroomCoursesAliases(courseId);
}

//Course Update Functionality
function modalEditCourse(courseId) {
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
            +'<input type="button" onclick="initclassroomCoursesUpdate('+courseId+')" value="Update" class="btn btn-primary btn-md" >'
          +'</div>'
        +'</div>'
      +'</div>';
  $('#apimodalform').empty().html(print);
  console.log('Modal Form print success');
  classroomCoursesGetFormValue(courseId);
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

function initclassroomCoursesUpdate(courseId) {
  classroomCoursesUpdate(courseId,classroomCoursesFormToDataObject());
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
  print='<div class="row" style="margin-right: 0;">'
          +'<div class="col-12" style="padding-right: 0;">'
            +'<div class="container-dashboard" style="background: url('+"'"+'../images/bg-01.jpg'+"'"+') no-repeat center center fixed; webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;">'
              +'<div class="chart-container" >'
                +'<div class="row" id="chart-container">'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
          +'<div class="col-12" style="padding-right: 0;">'
            +'<div class="container-classroom" style="background: url('+"'"+'../images/bg-01.jpg'+"'"+') no-repeat center center fixed; webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;">'
              +'<div class="course-container p-3" >'
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
                +'<div class="row p-t-15 p-b-30" id="course-container" style="max-height:400px; overflow:scroll">'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
          +'<div class="col-12" style="padding-right: 0;">'
            +'<div class="container-classroom pt-0" style="background: url('+"'"+'../images/bg-01.jpg'+"'"+') no-repeat center center fixed; webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;">'
              +'<div class="course-container p-3" >'
                +'<div class="row">'
                  +'<div class="col text-left">'
                    +'<span class="login100-form-title p-b-10" style="text-align: left;">Classroom ClassWork</span>'
                  +'</div>'
                +'</div>'
                +'<div class="row p-t-15 p-b-30" id="courseWork-container" style="max-height:400px; overflow:scroll">'
                +'</div>'
              +'</div>'
            +'</div>'
          +'</div>'
        +'</div>';
  return print;
}


//Course add Functionality
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
        +'<div class="col-md-6">'
          +'<div class="form-group">'
            +'<label>Section</label>'
            +'<input value="" type="text" max="10" id="courseSection" class="form-control">'
          +'</div>'
        +'</div>'
        +'<div class="col-md-6">'
          +'<div class="form-group">'
            +'<label>Room</label>'
            +'<input value="" type="text" max="10" id="courseRoom" class="form-control">'
            +'<select style="display:none" id="courseState" class="form-control">'
              +'<option selected>PROVISIONED</option>'
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
  var current = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
  data = {
    name: $("#courseName").val(),
    ownerId: current.getId(),
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


//Course add announcement Functionality
function modalCourseAddAnnouncement(courseId) {
  console.log('Modal Clicked');
  $('#apimodal').empty().html(initModalDOM());
  $('#apimodaltitle').html('Add Announcement');

  print='<div class="row">'
        +'<div class="col-md-6">'
          +'<div class="form-group">'
            +'<label>Assignee Mode</label>'
            +'<select id="announcement-assigneeMode" onchange="manageAnnouncementChooseStudent('+courseId+')" class="form-control">'
              +'<option>ALL_STUDENTS</option>'
              +'<option>INDIVIDUAL_STUDENTS</option>'
            +'</select>'
          +'</div>'
        +'</div>'
        +'<div class="col-md-6">'
          +'<div class="form-group">'
            +'<label>State</label>'
            +'<select id="announcement-state" onchange="manageAnnouncementScheduledTime()" class="form-control" required>'
              +'<option>PUBLISHED</option>'
              +'<option>DRAFT</option>'
            +'</select>'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row" id="announcement-scheduledTime-div" style="display:none;">'
        +'<div class="col-md-12">'
          +'<div class="form-group">'
            +'<label>Scheduled Time</label>'
            +'<input value="" type="hidden" id="announcement-scheduledTime" class="form-control" disabled>'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row" id="announcement-chooseStudent-div" style="display:none;">'
        +'<div class="col-md-12">'
          +'<div class="form-group">'
            +'<label>Select Students</label>'
            +'<select multiple id="announcement-chooseStudent" class="form-control" disabled></select>'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row">'
        +'<div class="col-md-12">'
          +'<div class="form-group">'
            +'<label>Announcement Text</label>'
            +'<input type="text" value="" id="announcement-text" max-length="200" class="form-control">'
          +'</div>'
        +'</div>'
      +'</div>'
      +'<div class="row">'
        +'<div class="col-md-12 text-center">'
          +'<div class="form-group">'
            +'<input type="button" onclick="initclassroomAnnouncementAdd('+courseId+')" value="Add Announcement" class="btn btn-primary btn-md" >'
          +'</div>'
        +'</div>'
      +'</div>';
  $('#apimodalform').empty().html(print);
  console.log('Modal Form print success');
  $('#apimodal').modal('show');
}

function manageAnnouncementScheduledTime() {
  var state = $("#announcement-state").val();
  if(state == 'PUBLISHED'){
    $("#announcement-scheduledTime").prop('required',false).prop('disabled',true).attr('type','hidden');
    $("#announcement-scheduledTime-div").slideUp('1000');
  } else {
    $("#announcement-scheduledTime").prop('disabled',false).prop('required',true).attr('type','datetime-local');
    $("#announcement-scheduledTime-div").slideDown('1000');
  }
}

function manageAnnouncementChooseStudent(courseId) {
  var state = $("#announcement-assigneeMode").val();
  if(state == 'ALL_STUDENTS'){
    $("#announcement-chooseStudent").prop('required',false).prop('disabled',true);
    $("#announcement-chooseStudent-div").slideUp('1000');
  } else {
    $("#announcement-chooseStudent").prop('disabled',false).prop('required',true);
    //function to add students enrolled in the course
    getCourseStudentListAsOption(courseId,"#announcement-chooseStudent");
    $("#announcement-chooseStudent-div").slideDown('1000');
  }
}

function getCourseStudentListAsOption(courseId,selectedId){
  return gapi.client.classroom.courses.students.list({
    "courseId": courseId
  })
  .then(function(response) {
    data=response.result.students;
    $(selectedId).empty();
    if (typeof data !== 'undefined' && data.length > 0) {
      for(i=0; i<data.length; i++){
        $(selectedId).append('<option value="'+data[i].profile.id+'" data-label="'+data[i].profile.emailAddress+'" data-icon="'+data[i].profile.photoUrl+'">'+data[i].profile.name.fullName+'</option>');
      }
    } else {
      $(selectedId).append('<option value="">No Students Enrolled</option>');
    }
  },
  function(err) { console.error("Execute error", err); });
}

function classroomAnnouncementFormToDataObject(courseId) {
  console.log('Modal Form Data to object success');
  // var current = gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
  data = {
    assigneeMode: $("#announcement-assigneeMode").val(),
    state: $("#announcement-state").val(),
    text: $("#announcement-text").val()
  }
  if ($("#announcement-scheduledTime").prop('required')) {
    date = new Date($("#announcement-scheduledTime").val());
    isoString = date.toISOString();
    data['scheduledTime']=isoString;
  }

  if ($("#announcement-chooseStudent").prop('required')) {
    studentIdsObj = {}; studentArray = [];
    studentArray = $("#announcement-chooseStudent").val();
    studentIdsObj['studentIds']=studentArray;
    data['individualStudentsOptions']=studentIdsObj;
  }

  return data;
}

function initclassroomAnnouncementAdd(courseId) {
  console.log('Modal Form init Submitted');
  classroomAnnouncementAdd(courseId,classroomAnnouncementFormToDataObject(courseId));
}


function classroomAnnouncementAdd(courseId,data) {
  return gapi.client.classroom.courses.announcements.create({
    "courseId":courseId,
    "resource":data
  })
  .then(function(response) {
    console.log('Modal Form Submitted');
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
    Toast.fire({
      title:"Announcement Add Success",
      icon: "success"
    });
    $('#apimodal').modal('hide');
    initCourses();
  },
  function(err) { console.error("Execute error", err); });
}



//Course add student Functionality
  function modalCourseAddStudent(courseId) {
    console.log('Modal Clicked');
    $('#apimodal').empty().html(initModalDOM());
    $('#apimodaltitle').html('Add Student');

    print='<div class="row">'
          +'<div class="col-md-12">'
            +'<div class="form-group">'
              +'<label>Student Email ID</label>'
              +'<input value="" type="text" max-length="100" id="studentEmail" class="form-control">'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="row">'
          +'<div class="col-md-12">'
            +'<div class="form-group">'
              +'<p class="muted">You can add student only if you are subscribed to G Suite for Education, you email id has admin Access and you are verified owner this website domain.</p>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="row">'
          +'<div class="col-md-12 text-center">'
            +'<div class="form-group">'
              +'<input type="button" onclick="initclassroomStudentAdd('+courseId+')" value="Add Student" class="btn btn-primary btn-md" >'
            +'</div>'
          +'</div>'
        +'</div>';
    $('#apimodalform').empty().html(print);
    console.log('Modal Form print success');
    $('#apimodal').modal('show');
  }

  function initclassroomStudentAdd(courseId) {
    console.log('Modal Form init Submitted');
    classroomStudentAdd(courseId,$("#studentEmail").val());
  }


  function classroomStudentAdd(courseId,email) {
    return gapi.client.classroom.courses.students.create({
      "courseId":courseId,
      "resource":{
        "userId" : email
      }
    })
    .then(function(response) {
      console.log('Modal Form Submitted');
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
      Toast.fire({
        title:"Student Add Success",
        icon: "success"
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title:"Student Add Failed",
        icon: "error"
      });
    });
  }

  //Course add teacher Functionality
  function modalCourseAddTeacher(courseId) {
    console.log('Modal Clicked');
    $('#apimodal').empty().html(initModalDOM());
    $('#apimodaltitle').html('Add Teacher');

    print='<div class="row">'
          +'<div class="col-md-12">'
            +'<div class="form-group">'
              +'<label>Teacher Email</label>'
              +'<input type="text" max="100" value="" id="teacherEmail" class="form-control">'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="row">'
          +'<div class="col-md-12">'
            +'<div class="form-group">'
              +'<p class="muted">You can add teacher only if you are subscribed to G Suite for Education, you email id has admin Access and you are verified owner this website domain.</p>'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="row">'
          +'<div class="col-md-12 text-center">'
            +'<div class="form-group">'
              +'<input type="button" onclick="initclassroomTeacherAdd('+courseId+')" value="Add Teacher" class="btn btn-primary btn-md" >'
            +'</div>'
          +'</div>'
        +'</div>';
    $('#apimodalform').empty().html(print);
    console.log('Modal Form print success');
    $('#apimodal').modal('show');
  }

  function initclassroomTeacherAdd(courseId) {
    console.log('Modal Form init Submitted');
    classroomTeacherAdd(courseId,$("#teacherEmail").val());
  }


  function classroomTeacherAdd(courseId,email) {
    return gapi.client.classroom.courses.teachers.create({
      "courseId":courseId,
      "resource":{
        "userId" : email
      }
    })
    .then(function(response) {
      console.log('Modal Form Submitted');
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
      Toast.fire({
        title:"Teacher Add Success",
        icon: "success"
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title:"Teacher Add Failed",
        icon: "error"
      });
    });
  }
  //Course add topics Functionality
  function modalCourseAddTopic(courseId) {
    console.log('Modal Clicked');
    $('#apimodal').empty().html(initModalDOM());
    $('#apimodaltitle').html('Add Topic');

    print='<div class="row">'
          +'<div class="col-md-12">'
            +'<div class="form-group">'
              +'<label>Topic Name</label>'
              +'<input type="text" max="50" value="" id="topicName" class="form-control">'
            +'</div>'
          +'</div>'
        +'</div>'
        +'<div class="row">'
          +'<div class="col-md-12 text-center">'
            +'<div class="form-group">'
              +'<input type="button" onclick="initclassroomTopicAdd('+courseId+')" value="Add Topic" class="btn btn-primary btn-md" >'
            +'</div>'
          +'</div>'
        +'</div>';
    $('#apimodalform').empty().html(print);
    console.log('Modal Form print success');
    $('#apimodal').modal('show');
  }


  function initclassroomTopicAdd(courseId) {
    console.log('Modal Form init Submitted');
    classroomTopicAdd(courseId,$('#topicName').val());
  }


  function classroomTopicAdd(courseId,topicName) {
    return gapi.client.classroom.courses.topics.create({
      "courseId": courseId,
      "resource": {
        "name": topicName
      }
    })
    .then(function(response) {
      console.log('Modal Form Submitted');
      // Handle the results here (response.result has the parsed body).
      console.log("Response", response);
      Toast.fire({
        title:"Topic Add Success",
        icon: "success"
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title:"Error Adding Topic",
        icon: "error"
      });
    });
  }



  //courses - delete
  function deleteCourse(courseId) {
    //first archive courseSection
    //then delete
    Pop.fire({
      text: "Are you sure you want to delete the course ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        classroomCoursesDelete(courseId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Pop.fire({
          title: "Cancelled",
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  }

  function classroomCoursesDelete(id) {
    return gapi.client.classroom.courses.delete({"id": id})
    .then(function(response) {
      console.log("Deleted Course Response", response);
      Pop.fire({
        title: "Deleted!",
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title: "An error occured",
        icon: 'error'
      });
    });
  }

  //courses.student - delete
  function deleteCoursesStudent(courseId,userId) {
    Pop.fire({
      text: "Are you sure you want to delete the student ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        classroomCoursesStudentDelete(courseId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Pop.fire({
          title: "Cancelled",
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  }

  function classroomCoursesStudentDelete(courseId,userId) {
    return gapi.client.classroom.courses.students.delete({
      "courseId": courseId,
      "userId": userId
    })
    .then(function(response) {
      console.log("Response", response);
      Pop.fire({
        title: "Removed!",
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title: "An error occured",
        icon: 'error'
      });
    });
  }


  //Course teacher - delete
  function deleteCoursesTeacher(courseId,userId) {
    Pop.fire({
      text: "Are you sure you want to remove teacher from this course ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, remove it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        classroomCoursesTeacherDelete(courseId,userId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Pop.fire({
          title: "Cancelled",
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  }

  function classroomCoursesTeacherDelete(courseId,userId) {
    return gapi.client.classroom.courses.teachers.delete({
      "courseId": courseId,
      "userId": userId
    })
    .then(function(response) {
      console.log("Removed Teacher Response", response);
      Pop.fire({
        title: "Removed!",
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title: "An error occured",
        icon: 'error'
      });
    });
  }

  //courses.announcement - delete
  function deleteCoursesAnnouncement(courseId,AnnouncementId) {
    Pop.fire({
      text: "Are you sure you want to delete the announcement ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        classroomCoursesAnnouncementDelete(courseId,AnnouncementId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Pop.fire({
          title: "Cancelled",
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  }

  function classroomCoursesAnnouncementDelete(courseId,AnnouncementId) {
    return gapi.client.classroom.courses.announcements.delete({
      "courseId": courseId,
      "id": AnnouncementId
    })
    .then(function(response) {
      console.log("Deleted Announcement Response", response);
      Pop.fire({
        title: "Deleted!",
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title: "An error occured",
        icon: 'error'
      });
    });
  }

  //courses.topic - delete
  function deleteCoursesTopic(courseId,topicId) {
    Pop.fire({
      text: "Are you sure you want to delete the topic ?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        classroomCoursesTopicDelete(courseId,topicId);
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Pop.fire({
          title: "Cancelled",
          icon: 'error',
          timer: 2000,
          timerProgressBar: true
        });
      }
    });
  }

  function classroomCoursesTopicDelete(courseId,topicId) {
    return gapi.client.classroom.courses.topics.delete({
      "courseId": courseId,
      "id": topicId
    })
    .then(function(response) {
      console.log("Deleted Topic Response", response);
      Pop.fire({
        title: "Deleted!",
        icon: 'success',
        timer: 2000,
        timerProgressBar: true
      });
      $('#apimodal').modal('hide');
      initCourses();
    },
    function(err) {
      console.error("Execute error", err);
      Toast.fire({
        title: "An error occured",
        icon: 'error'
      });
    });
  }
