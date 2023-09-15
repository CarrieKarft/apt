class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :phone, :location, :password_digest
end
