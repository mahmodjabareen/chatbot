<template>
  <div class="help-page-container">
    <div class="bot-area">
      <img src="../../assets/bot.jpg" alt="" />
      <span>Virtual Agent</span>
    </div>

    <div class="chat-wrapper">
      <div ref="chat" class="chat-content">
        <span v-for="(message, i) in messages" :key="i" :class="[message.type]">
          {{ message.content }}
        </span>
      </div>
    </div>
    <div class="input-wrapper">
      <input
        type="text"
        placeholder="Ask anything..."
        v-model="currentMessage"
        @keydown.enter="sendMessage"
      />
      <button @click="sendMessage">
        <font-awesome-icon :icon="['far', 'paper-plane']" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      currentMessage: "",
    };
  },
  mounted() {
    this.scrollBottom();
  },
  methods: {
    scrollBottom() {
      this.$refs.chat.scrollTo({
        top: this.$refs.chat.scrollHeight,
        behavior: "smooth",
      });
    },
    sendMessage() {
      if (!this.currentMessage) return;

      this.messages.push({
        type: "sent",
        content: this.currentMessage,
      });

      setTimeout(() => {
        this.scrollBottom();
      }, 100);
      
      this.sendMessageToBot();
    },
    async sendMessageToBot() {   
        const botUrl = 'Your_URL'; // replace your URL 
        const modelUuid = "YOUR_MODEL_UUID"; // replace your Model UUID 
        const headerToken = "Your_Token"; // replace your Token
        const requestPayload = {
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


      this.currentMessage = ""; // clear chat box
      var  chunkText=""; // the response will returned here
      const res = await fetch(botUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": headerToken,
           //API
          /* In a real web application, store the api key in a safe place (.env for example) 
          * and do not commit it.
          */
        },
        body: JSON.stringify(requestPayload),
      }).then(response => {
    const reader = response.body.getReader();
    function readChunk() {
      return reader.read().then(({ done, value }) => {
        if (done) {
          return;
        }
      
        //convert chunks to text
         chunkText += new TextDecoder().decode(value);
        // Read the next chunk
        return readChunk();
      });
    }

    return readChunk();
  }); 
      this.messages.push({
        type: "received",
        content: chunkText,
      });

      setTimeout(() => {
        this.scrollBottom();
      }, 100);
    },
  },
};
</script>

<style lang="scss" scoped>
.help-page-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 12px;

  .bot-area {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 38px 24px 24px;
    border-bottom: 1px solid var(--seperator-color);

    span {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
    }

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
    }
  }

  .chat-wrapper {
    display: flex;
    flex-direction: column-reverse;
    height: 100%;
    overflow: hidden;

    .chat-content {
      display: flex;
      flex-direction: column;
      font-size: 18px;
      padding: 24px;
      overflow: auto;

      .sent,
      .received {
        min-width: 30px;
        margin: 8px 0;
      }

      .received {
        align-self: flex-start;
        position: relative;
        padding: 12px;
        color: var(--secondary-color);
        background: #dde1e2;
        border-top-right-radius: 22px;
        border-bottom-right-radius: 22px;
        border-bottom-left-radius: 24px;
        border-top-left-radius: 4px;
      }

      .sent {
        align-self: flex-end;
        position: relative;
        padding: 12px;
        color: #fff;
        background: var(--primary-color);
        border-top-left-radius: 22px;
        border-bottom-left-radius: 22px;
        border-bottom-right-radius: 24px;
        border-top-right-radius: 4px;
      }
    }
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    height: 120px;
    margin: 24px;

    input {
      font-family: "Assistant";
      border: none;
      width: 60%;
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
      padding: 16px;
      border-radius: 18px;
      font-size: 18px;

      &:focus {
        outline: none;
      }
    }

    button {
      display: flex;
      text-align: center;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      background-color: var(--primary-color);
      border: none;
      color: #fff;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      box-shadow: 0px 0px 4px var(--primary-color);
      cursor: pointer;

      svg {
        margin-right: 4px;
      }

      &:hover {
        background-color: var(--primary-color-hover);
      }
    }
  }
}
</style>
