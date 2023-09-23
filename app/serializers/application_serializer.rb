class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :appartment_id, :user_id, :applicant_name, :current_residence_phone, :current_residence_address, :yearly_income, :applicant_email
  # belongs_to :user
end
