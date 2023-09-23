class UsersController < ApplicationController
    # skip_before_action :raise_exceptions, only: [:create]
    skip_before_action :authorize, only: [:create]
# shows user profile
    def show 
        # needs to render authorize error if user not logged in

        # works
        # can test after adding sessions controller + authorization/authentication
        user = find_user
        render json: user, status: 200
    end
# new user signup
    def create
        # needs to render invlide exception if info is invalid

        new_user = User.create!(user_params)
        # if new_user.valid?
        session[:user_id] = new_user.id
        render json: new_user, status: 202
        # else 
        #     render json: {error: new_user.errors.full_messages}, status: :unprocessable_entity
        # end
    end
# edit user account
# how to add rescue to this method
    def update
        # needs to render authorize error if user not logged in
        # needs to render invlide exception if info is invalid

        # doesnt work
        user = find_user
        updated_user = user.update!(user_params)
        # updated_user = find_user.update!(user_params)
        # why is above line evaluating to true?
        render json: updated_user, status: :accepted
        # can I call update! on an instance variable?
        # if updated_user.valid?
        #     render json: updated_user, status: 202
        # else    
        #     render json: {error: updated_user.errors.full_messages}, status: :unprocessable_entity
        # end
    end
# delete user account
# do I need to delete the session when user account deleted? Also need to delete user applicatins
    def destroy
        # do we need this method? amybe to show that we know to delete all of users applications when user account deleted?

        # needs to render authorize error if user not logged in

        user = find_user
        user.delete
        head :no_content, status: 204
    end

    private
# need to look into strict params for password protection
    def user_params
        params.permit(:username, :password, :password_confirmation, :phone, :location, :name)
    end
end
