class UsersController < ApplicationController
    # skip_before_action :raise_exceptions, only: [:create]
# shows user profile
    def show 
        # can test after adding sessions controller + authorization/authentication
        @user = User.find(session[:user_id])
        render json: @user, status: 200
    end
# new user signup
    def create
        new_user = User.create!(user_params)
        if new_user.valid?
            render json: new_user, status: 202
        else 
            byebug
            render json: {error: new_user.errors.full_messages}, status: :unprocessable_entity
        end
    end
# edit user account
# how to add rescue to this method
    def update
        # find_user = User.find(session[:user_id])
        updated_user = @user.update!(user_params)
        # can I call update! on an instance variable?
        if updated_user.valid?
            render json: updated_user, status: 202
        else    
            render json: {error: updated_user.errors.full_messages}, status: :unprocessable_entity
        end
    end
# delete user account
# do I need to delete the session when user account deleted? Also need to delete user applicatins
    def destroy
        @user.delete
        head :no_content, status: 204

    end

    private
# need to look into strict params for password protection
    def user_params
        params.permit(:username, :password, :password_confirmation, :phone, :location, :name)
    end
end
