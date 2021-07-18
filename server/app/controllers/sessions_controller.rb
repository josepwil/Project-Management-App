class SessionsController < ApplicationController
  # logging in
  def create
    # make this work for users (employees) too
    @user = Admin.find_by_email(params[:email])
    if @user && @user.password == params[:data][:email]
      session[:user_id] = @user.id
      render json: {
        logged_in: true,
        user: @user
      }
    elsif !@user
      render json: {
        status: 401,
        errors: ['no such user']
      }
    else 
      render json: {
        status: 401,
        errors: ['incorrect password']
      }
    end
  end
    
    def is_logged_in?
      if logged_in? && current_user
        render json: {
          logged_in: true,
          user: current_user
        }
      else 
        render json: {
          logged_in: false,
          message: 'no such user'
        }
      end
    end

  # logging out
  def destroy
    session[:user_id] = nil
  end
end
