class CreateApplications < ActiveRecord::Migration[6.1]
  def change
    create_table :applications do |t|
      t.integer :appartment_id
      t.integer :user_id
      t.string :applicant_name
      t.string :current_residence_phone
      t.string :current_residence_address
      t.string :yearly_income
      t.string :applicant_email

      t.timestamps
    end
  end
end
