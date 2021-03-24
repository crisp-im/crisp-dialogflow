# Crisp & Dialogflow integration

__The complete tutorial is available here: [How to connect a Dialogflow chatbot with Crisp?
](https://help.crisp.chat/en/article/how-to-connect-a-dialogflow-chatbot-with-crisp-3ymy8f/)__

1. Get your keys from Crisp, you can choose between:
    * Crisp account API token: https://go.crisp.chat/account/token/
    * Plugin API token: https://marketplace.crisp.chat/ (first time working with plugins? This article will help you: [How to create your first Crisp plugin?](https://help.crisp.chat/en/article/how-to-create-your-first-crisp-plugin-nxbip8/))
2. If needed, browse to https://dialogflow.cloud.google.com/;
    * Create a project;
    * Create some intents;
3. Download your Dialogflow client API credentials: https://cloud.google.com/docs/authentication/production#create_service_account
4. Add Google API key path to env: `export GOOGLE_APPLICATION_CREDENTIALS=PATH_KEY_FILE.json`
5. In this project root: `node lib/index.js`
