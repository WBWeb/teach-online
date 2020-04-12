//invitations - get
function invitationsGet(id) {
  return gapi.client.classroom.invitations.get({
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//invitations - list  :: At least one of userId or courseId must be supplied in data
function invitationsList(data) {
    return gapi.client.classroom.invitations.list(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//invitations - delete
function invitationsDelete(id) {
  return gapi.client.classroom.invitations.delete({
    "id":id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//invitations - create
function invitationsCreate(data) {
  return gapi.client.classroom.invitations.create(data)
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//invitations - accept
function invitationsAccept(id) {
  return gapi.client.classroom.invitations.accept({
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
