class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]
  # logs user in
  def create
    user = User.find_by(username: params[:username])
    session[:user_id] = user.id
    render json: user
  end
# logs user out by deleting the user_id from the session hash
  def destroy
    session.destroy :user_id
    render head :no_content
  end
end
