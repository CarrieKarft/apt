class User < ApplicationRecord
    # clean up validations
    has_many :applications
    has_many :apartments, through: :applications

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    validates :phone, length: {minimum: 10}

    has_secure_password

end
