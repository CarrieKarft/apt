class Apartment < ApplicationRecord
    has_many :applications
    has_many :users, through: :applications

    validates :name, :number_of_rooms, :address, :phone, presence: true
    validates :available_to_rent, :parking_available, presence: true, allow_blank: true
    validates :phone, length: {minimum: 10}

end
