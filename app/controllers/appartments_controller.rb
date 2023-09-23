class AppartmentsController < ApplicationController
    skip_before_action :authorize, only: [:index, :show, :create]

    def show
        # this will need a record not found response
        
        apt = Appartment.find(params[id]) 
        render json: apt, status: 200
    end

    def index
        appartments = Appartment.all
        render json: appartments, status: 200
    end

    def create
        # needs to rais invalid exception if info is invalid

        # stretch goal: admin profile need to be logged in as admin to create apt listing
        appartment = Appartment.create!(appartment_params)
        render json: appartment, status: :created
    end

    private

    def appartment_params
        params.permit(:name, :number_of_rooms, :parking_available, :monthly_rent, :address, :phone, :pets_allowed, :available_to_rent)
    end
end

# t.string "name"
#     t.integer "number_of_rooms"
#     t.boolean "parking_available"
#     t.integer "monthly_rent"
#     t.string "address"
#     t.string "phone"
#     t.string "pets_allowed"
#     t.boolean "available_to_rent"
