class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

def index
    # not used in client but might be needed for debugging
    users = User.all 
    render json: users
end

def show 
    user = find_user
    render json: user, status: 200
end

def create
    new_user = User.create!(user_params)
    session[:user_id] = new_user.id
    render json: new_user, status: 202
end

private

    def user_params
        params.permit(:username, :password, :password_confirmation, :phone, :location, :name)
    end
end