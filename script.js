var channelstatus = ["Channel is currently offline", "Account closed", "Channel is currently online"];

function twitchtvChannels(channel, index) {
  $.ajax({
    headers: {
      Accept: "application/json",
    },
    url: 'https://fcc-twitch-api.freecodecamp.repl.co/twitch-api/streams/' + channel,
    success: function (response) {
      for (j = 0; j < channelstatus.length; j++) {
        if (response.stream === null) {
          $(".channel-status-" + index).text(channelstatus[0]).css("color", "green");
        }
        else if (response.stream === undefined) {
          $(".channel-status-" + index).text(channelstatus[1]).css("color", "black");
        }
        else {
          $(".channel-status-" + index).text(channelstatus[2]).css("color", "red");
        }
      }
    },
  });
}

$(document).ready(function () {
  var channelArr = ["ESL_SC2", "OgamingSC2", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
  for (i = 0; i < channelArr.length; i++) {
    twitchtvChannels(channelArr[i], i + 1);
  }
});
