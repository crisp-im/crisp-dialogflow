# Crisp & Dialogflow integration

1. Get your keys from Crisp, you can choose between:
    * Crisp account API token: https://go.crisp.chat/account/token/
    * Plugin API token: https://marketplace.crisp.chat/ (first time working with plugins? This article will help you: [How to create your first Crisp plugin?](https://help.crisp.chat/en/article/how-to-create-your-first-crisp-plugin-nxbip8/))
1. If needed, browse to https://dialogflow.cloud.google.com/;
    1. Create a project;
    1. Create some intents;
1. Download your Dialogflow client API credentials: https://cloud.google.com/docs/authentication/production#create_service_account
1. Add Google API key path to env: `export GOOGLE_APPLICATION_CREDENTIALS=PATH_KEY_FILE.json`
1. In this project root: `node lib/index.js`

__Complete tutorial available here: [How to connect a Dialogflow chatbot with Crisp?
](https://help.crisp.chat/en/article/how-to-connect-a-dialogflow-chatbot-with-crisp-3ymy8f/)__
