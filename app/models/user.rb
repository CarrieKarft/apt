class User < ApplicationRecord
    # clean up validations
    has_many :applications
    has_many :apartments, through: :applications

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    # should change to validates :password, presence: true, confirmation: true?
    # maybe add more validations like length to password
    validates :password_confirmation, presence: true
    validates :phone, length: {is: 10}

    has_secure_password

end
