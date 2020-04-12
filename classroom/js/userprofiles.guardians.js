//userprofiles.guardians - list :: studentId compulsory
function userProfilesGuardiansList(data) {
  return gapi.client.classroom.userProfiles.guardians.list(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//userprofiles.guardians - get
function userProfilesGuardiansGet(studentId,guardianId) {
  return gapi.client.classroom.userProfiles.guardians.get({
    "studentId": studentId,
    "guardianId": guardianId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//userprofiles.guardians - delete
function userProfilesGuardiansDelete(studentId,guardianId) {
  return gapi.client.classroom.userProfiles.guardians.delete({
    "studentId": studentId,
    "guardianId": guardianId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
