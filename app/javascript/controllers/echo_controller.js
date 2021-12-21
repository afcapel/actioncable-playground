import { Controller } from "@hotwired/stimulus"
import subscription from "../channels/echo_channel"

export default class extends Controller {
  static targets = ["input"]

  connect() {
    console.log("CONNECTED")
  }

  echo(event) {
    event.preventDefault()
    subscription.speak(this.inputTarget.value)
  }
}
