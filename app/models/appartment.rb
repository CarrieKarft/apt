class Appartment < ApplicationRecord
    validates :name, :number_of_rooms, :address, :phone, :available_to_rent, :parking_available, presence: true
    validates :phone, length: {is: 10}

    has_many :applications
    has_many :users, :through :applications
end

# t.string "name"
# t.integer "number_of_rooms"
# t.boolean "parking_available"
# t.integer "monthly_rent"
# t.string "address"
# t.string "phone"
# t.string "pets_allowed"
# t.boolean "available_to_rent"
