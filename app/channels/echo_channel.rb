class EchoChannel < ApplicationCable::Channel
  def subscribed
    stream_for "echo"
  end

  def speak(data)
    EchoChannel.broadcast_to("echo", { message: data["message"] })
  end
end
