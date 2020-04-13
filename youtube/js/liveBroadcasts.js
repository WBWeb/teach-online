//liveBroadcasts - insert - date format - 2020-05-01T09:00:00.000Z
var dateobj = new Date();
function youtubeLiveBroadcastsInsert(title='New class Video',scheduledStartTime=dateobj.toISOString(),scheduledEndTime=dateobj.toISOString(),description='Desc') {
  return gapi.client.youtube.liveBroadcasts.insert({
      "part": "snippet,contentDetails,status",
      "resource": {
        "snippet": {
          "title": title,
          "scheduledStartTime": scheduledStartTime,
          "scheduledEndTime": scheduledEndTime,
          "description": description
        },
        "contentDetails": {
          "enableClosedCaptions": true,
          "enableContentEncryption": true,
          "enableDvr": true,
          "enableEmbed": true,
          "recordFromStart": true,
          "startWithSlate": true
        },
        "status": {
          "privacyStatus": "unlisted"
        }
      }
    })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//liveBroadcasts - list
function youtubeLiveBroadcastsList() {
  return gapi.client.youtube.liveBroadcasts.list({
    "part": "snippet,contentDetails,status",
    "broadcastType": "all",
    "mine": true
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}

//liveBroadcasts - delete
function youtubeLiveBroadcastsDelete(id) {
  return gapi.client.youtube.liveBroadcasts.delete({
    "id": id
  })
  .then(function(response) {
    // Handle the results here (response.result has the parsed body).
    console.log("Response", response);
  },
  function(err) { console.error("Execute error", err); });
}
