class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :phone, :location, :password_digest
  # need to display appartments info not applications
  has_many :applications
end
