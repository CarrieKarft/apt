class ApartmentSerializer < ActiveModel::Serializer
  attributes :id, :name, :number_of_rooms, :parking_available, :monthly_rent, :address, :phone, :pets_allowed, :available_to_rent

  has_many :applications

end
