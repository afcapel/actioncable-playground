import consumer from "./consumer"

const subscription = consumer.subscriptions.create("EchoChannel", {
  connected() {
    console.log("Connected")
  },

  disconnected() {
    console.log("Disconnected")
  },

  received(data) {
    console.log("Received", JSON.stringify(data))
  },

  speak(message) {
    console.log("Sending", message)
    this.perform("speak", { message: message })
  }
})

export default subscription
