//userprofiles - get
function userProfilesGet(userId) {
  return gapi.client.classroom.userProfiles.get({
    "userId": userId
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
