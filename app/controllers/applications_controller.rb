class ApplicationsController < ApplicationController
    # need to add some application data to test these methods

    def index
        # needs to render authorize error if user not logged in
        # needs to raise not found exception if application not found
        # can rais not found exception if using find_by?

        user = find_user
        applications = user.applications.where(apartment_id: params[:id])
        render json: applications, status: :found
    end

    def create
        # needs to render authorize error if user not logged in
        # needs to render invlide exception if info is invalid


        user = find_user
        application = user.applications.create!(applicaition_params)
        render json: application, status: :created

    end

    def update
        # needs to render authorize error if user not logged in
        # needs to render invlide exception if info is invalid
        # needs to raise not found exception if application not found


        user = find_user
        application = user.applications.find(params[:id])
        # need not found rescue for this
        updated_application = application.update!(applicaition_params)
        render json: application, status: :created
    end

    def destroy
        # needs to render authorize error if user not logged in
        # needs to raise not found exception if application not found


        user = find_user
        application = user.applications.find(params[:id])
        application.delete
        render json: {}
    end

    private

    # def find_application
    #     user = find_user
    #     user.applications.find(params[:id])
    # end

    def applicaition_params
        # do I need user_id in params since all of these methods use find_user?
        params.permit(:user_id, :apartment_id, :yearly_income, :current_residence_address, :current_residence_phone, :applicant_email, :applicant_name)
    end


end
