const Crisp = require("node-crisp-api");
const dialogflow = require("@google-cloud/dialogflow");

const sessionClient = new dialogflow.SessionsClient();
const crispClient = new Crisp();

const config = {
  crispIdentifier: "identifier",
  crispKey: "key",
  dialogflowProjectId: "dialogflow-project-id"
}

// If using plugin credentials, set tier to "plugin".
// crispClient.setTier("plugin");
crispClient.authenticate(
  config.crispIdentifier,
  config.crispKey
);

crispClient.on("message:send", (event) => {
  console.log("Got \"message:send\" event:", event);
  sendMessageToDialogFlow(event, event.content);
});

function sendMessageToDialogFlow(event) {
  const request = {
    session: sessionClient.projectAgentSessionPath(
      config.dialogflowProjectId,
      event.session_id
    ),
    queryInput: {
      text: {
        text: event.content,
        languageCode: "en-US",
      },
    },
  };

  sessionClient.detectIntent(request).then(responses => {
    sendMessageInCrispConversation(event, responses[0].queryResult.fulfillmentText)
  });
}

function sendMessageInCrispConversation(event, message) {
  crispClient.websiteConversations.sendMessage(
    event.website_id,
    event.session_id,
    {
      type: "text",
      from: "operator",
      origin: "chat",
      content: message,
      user: {
        type: "participant",
        nickname: "Dialogflow Bot",
        avatar: "https://avatars.githubusercontent.com/u/8170782",
      }
    }
  )
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error(error);
    });
}

console.log("Now listening for events...");
