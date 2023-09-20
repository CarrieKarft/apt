class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create]
  # logs user in
  def create
    # works
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user
    else
      render json: {error: "Wrong username or password"}, status: 422
    end
  end
# logs user out by deleting the user_id from the session hash
  def destroy
    # works
    session.delete :user_id
    head :no_content
  end
end
