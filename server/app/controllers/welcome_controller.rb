class WelcomeController < ApplicationController
  def index
    message = "Hello from rails"
    render json: {
      message: message
    }
  end
end
