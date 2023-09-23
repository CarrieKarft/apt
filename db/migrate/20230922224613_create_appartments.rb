class CreateAppartments < ActiveRecord::Migration[6.1]
  def change
    create_table :appartments do |t|
      t.string :name
      t.integer :number_of_rooms
      t.boolean :parking_available
      t.integer :monthly_rent
      t.string :address
      t.string :phone
      t.string :pets_allowed
      t.boolean :available_to_rent

      t.timestamps
    end
  end
end
