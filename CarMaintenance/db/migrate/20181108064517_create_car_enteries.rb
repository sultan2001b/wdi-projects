class CreateCarEnteries < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :mobile
      t.string :car_name
      t.string :car_plate
      t.boolean :fixed, default: false
      t.datetime :fixed_date_time, null: true
      t.datetime :entery_date_time

      t.timestamps
    end
  end
end
