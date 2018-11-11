class CreateCarIssues < ActiveRecord::Migration[5.2]
  def change
    create_table :issues do |t|
      t.string :name
      t.integer :customer_id

      t.timestamps
    end
  end
end
