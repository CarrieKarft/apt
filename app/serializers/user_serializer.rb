class UserSerializer < ActiveModel::Serializer
  # took out password_digest and added an additional has_many
  attributes :id, :name, :username, :phone, :location
  # need to display appartments info not applications
  has_many :applications
  has_many :apartments
end
