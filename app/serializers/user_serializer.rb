class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :phone, :location, :first_name, :unique_apartments

  def unique_apartments
    apartments = object.apartments
    apartments.uniq {|apt| apt.id}
  end

  def first_name
    name = object.name.split(" ")
    name.first
  end
end