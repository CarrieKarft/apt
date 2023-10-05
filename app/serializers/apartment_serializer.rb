class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_of_rooms, :parking_available, :monthly_rent, :address, :phone, :pets_allowed, :available_to_rent
  # maybe create custome serializer method to show #of applications only but no specific application info
  # has_many :users
  # has_many :applications
end
