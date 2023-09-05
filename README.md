# **Web Application Example**
This example represents a real world app that is being used together with your deployed model.

# **Project Setup**
To get started, follow these steps:
## Clone the Repository:
```sh
git clone https://github.com/avivday2/my-app.git
cd my-app
```
## Install Dependencies:
```sh
npm install
```
# **Configuration**
Navigate to **'src/pages/help'** and open the **HelpPage.vue** file. Inside the **sendMessageToBo** function, set the following variables with your specific values:
```Javascript
const botUrl = 'Your_URL'; // replace your URL 
const modelUuid = "YOUR_MODEL_UUID"; // replace your Model 
const headerToken = "Your_Token"; // replace your Token
```
Modify the values in the **request_payload** according to your requirements:
```Javascript
 const requestPayload={
                                model_uuid: modelUuid,
                                data: {
                                        messages: [
                                                      {
                                                        text: this.currentMessage,
                                                        user_role: true
                                                      }
                                                  ],
                                inference_params: {
                                                        max_new_tokens: 150,
                                                        temperature: 0.5,
                                                        repetition_penalty: 1,
                                                        top_p: 1,
                                                        do_sample: true,
                                                        num_beams: 1,
                                                        top_k: 50,
                                                        num_return_sequences: 1,
                                                        stop_strings: ["", ""]
                                                    },
                                  system_prompt: "- You are a helpful assistant chatbot.\n- You answer questions.\n- You are excited to be able to help the user, but will refuse to do anything that could be considered harmful to the user.\n- You are more than just an information source, you are also able to write poetry, short stories, and make jokes."
                                      }
                                };
```
### Compile and Hot-Reload for Development
To compile and enable hot-reloading during development, use the following command:
```sh
npm run dev
```
The application will run locally on port 3000, allowing you to interact with your integrated chatbot.

>Note: If you encounter any installation issues, consider using nvm to change your Node version to 14.0.0.

