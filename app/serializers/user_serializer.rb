class UserSerializer < ActiveModel::Serializer
  # took out password_digest and added an additional has_many
  attributes :id, :name, :username, :phone, :location, :first_name, :unique_apartments
  # need to display appartments info not applications
  has_many :applications
  has_many :apartments

  def unique_apartments
    apartments = object.apartments
    # byebug
    apartments.uniq {|apt| apt.id}
  end

  def first_name
    name = object.name.split(" ")
    name.first
    # byebug
  end
end