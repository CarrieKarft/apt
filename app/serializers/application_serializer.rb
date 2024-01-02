class ApplicationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :apartment_id, :applicant_name, :current_residence_phone, :current_residence_address, :yearly_income, :applicant_email

end
