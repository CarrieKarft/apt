class User < ApplicationRecord
    has_many :applicatins
    validates :username, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :phone, length: {is: 10}
    has_secure_password

end
