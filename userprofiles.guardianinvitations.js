//userprofiles.guardianinvitations - list ::studentId compulsory in data
function userProfilesGuardianInvitationsList(data) {
  return gapi.client.classroom.userProfiles.guardianInvitations.list(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//userprofiles.guardianinvitations - get
function userProfilesGuardianInvitationsGet(studentId,invitationId) {
  return gapi.client.classroom.userProfiles.guardianInvitations.get({
    "studentId": studentId,
    "invitationId": invitationId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//userprofiles.guardianinvitations - create
function userProfilesGuardianInvitationsCreate(data) {
  return gapi.client.classroom.userProfiles.guardianInvitations.create(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
