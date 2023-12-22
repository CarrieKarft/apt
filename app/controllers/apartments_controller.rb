class ApartmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    def show
        # this will need a record not found response
        # not used in client but might be needed for debugging

        apt = Apartment.find(params[:id]) 
        render json: apt, status: 200
    end

    def index
        apartments = Apartment.all
        render json: apartments, status: 200
    end

    def create
        # needs to rais invalid exception if info is invalid
        # not used in client but might be needed for debugging

        apartment = Apartment.create!(apartment_params)
        render json: apartment, status: :created
    end

    private

    def apartment_params
        params.permit(:name, :number_of_rooms, :parking_available, :monthly_rent, :address, :phone, :pets_allowed, :available_to_rent)
    end
end

