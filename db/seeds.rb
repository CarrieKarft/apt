# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# t.integer "appartment_id"
#     t.integer "user_id"
#     t.string "applicant_name"
#     t.string "current_residence_phone"
#     t.string "current_residence_address"
#     t.string "yearly_income"
#     t.string "applicant_email"

#     t.string "name"
#     t.integer "number_of_rooms"
#     t.boolean "parking_available"
#     t.integer "monthly_rent"
#     t.string "address"
#     t.string "phone"
#     t.string "pets_allowed"
#     t.boolean "available_to_rent"
puts "seeding..."
    User.create(name: "Carrie Kraft", username: "ckraft", phone: '5555555555', location: "Portland, OR", password: "ckraft", password_confirmation: "ckraft")

    User.create(name: "Eric Kraft", username: "ekraft", phone: '6666666666', location: "Portland, OR", password: "ekraft", password_confirmation: "ekraft")

    User.create(name: "Dougie", username: "dougie22", phone: '7777777777', location: "Portland, OR", password: "dougie22", password_confirmation: "dougie22")

    User.create(name: "Damien", username: "damien33", phone: '8888888888', location: "Portland, OR", password: "damien33", password_confirmation: "damien33")

    Apartment.create(name: "Parkrose Apartments", number_of_rooms: 2, parking_available: true, monthly_rent: 2500, address: "4444 SE Parkrose Ave, New York, NY 888888", phone: "5555555455", pets_allowed: "cats are allowed", available_to_rent: true)

    Apartment.create(name: "Regal Apartments", number_of_rooms: 4, parking_available: true, monthly_rent: 1900, address: "777 NW Regal Ave, Atlanta, GA 999999", phone: "8885445444", pets_allowed: "Pets are allowed under 70lbs", available_to_rent: true)

    Apartment.create(name: "Forest Apartments", number_of_rooms: 1, parking_available: false, monthly_rent: 2300, address: "777 SW Street Ave, Las Angelos, CA 000999", phone: "4332445444", pets_allowed: "No pets are allowed", available_to_rent: true)

    Apartment.create(name: "Sunrise Villa", number_of_rooms: 4, parking_available: true, monthly_rent: 4000, address: "6666 NE Hollywood Ave, Las Angelos, CA 000998", phone: "4332447890", pets_allowed: "No pets are allowed", available_to_rent: true)

    User.all.each do |user|
        rand(1..4).times do
            user.applications.create(apartment_id: rand(1..3), applicant_name: Faker::Name.name, current_residence_phone: "9999999999", applicant_email: Faker::Internet.email, current_residence_address: Faker::Address.full_address, yearly_income: "$100,000")
        end
    end
puts "done seeding!"
