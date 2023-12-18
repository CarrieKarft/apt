class UserSerializer < ActiveModel::Serializer
  # took out password_digest and added an additional has_many
  attributes :id, :name, :username, :phone, :location, :unique_apartments, :first_name
  # need to display appartments info not applications
  has_many :applications
  has_many :apartments

  def unique_apartments
    apartments = object.apartments
    # byebug
    apartments.uniq {|apt| apt.id}
  end
# come back to this when you are working on finishing touches
  def first_name
    name = object.name.split(" ")
    # byebug
  end
end
