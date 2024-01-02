class ApplicationsController < ApplicationController

    def create
        user = find_user
        application = user.applications.create!(applicaition_params)
        render json: application, status: :created

    end

    def update
        user = find_user
        application = user.applications.find(params[:id])
        updated_application = application.update!(applicaition_params)
        render json: application, status: :created
    end

    def destroy
        user = find_user
        application = user.applications.find(params[:id])
        application.delete
        render json: {}
    end

    private

    def applicaition_params
        params.permit(:user_id, :apartment_id, :yearly_income, :current_residence_address, :current_residence_phone, :applicant_email, :applicant_name)
    end


end
