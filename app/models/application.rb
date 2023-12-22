class Application < ApplicationRecord
    belongs_to :user
    belongs_to :apartment
    # validates :appartment_id, presence: :true
    # clean up validations
    validates :applicant_name, presence: :true
    validates :applicant_email, presence: true
    validates :current_residence_phone, presence: :true, length: {minimum: 10}
    validates :current_residence_address, presence: :true

end

