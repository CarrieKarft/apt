class ApplicationsController < ApplicationController
    # need to add some application data to test these methods

    def show
        # needs to render authorize error if user not logged in
        # needs to raise not found exception if application not found

        user = find_user
        application = user.applications.find(params[:id])
        render json: application, status: :found
    end

    def create
        # needs to render authorize error if user not logged in
        # needs to render invlide exception if info is invalid


        user = find_user
        applicaiton = user.applicaitons.create!(applicaition_params)
        render json: applicaiton, status: :created

    end

    def update
        # needs to render authorize error if user not logged in
        # needs to render invlide exception if info is invalid
        # needs to raise not found exception if application not found


        user = find_user
        applicaiton = user.applicaitons.find(params[:id])
        # need not found rescue for this
        updated_application = applicaiton.update!(applicaition_params)
        render json: updated_application, status: :created
    end

    def destroy
        # needs to render authorize error if user not logged in
        # needs to raise not found exception if application not found


        user = find_user
        applicaiton = user.applicaitons.find(params[:id])
        application.delete
        head :no_content
    end

    private

    # def find_application
    #     user = find_user
    #     user.applications.find(params[:id])
    # end

    def applicaition_params
        params.permit(:user_id, :appartment_id, :yearly_income, :current_residence_address, :current_residence_phone, :applicant_email, :applicant_name)
    end


end
