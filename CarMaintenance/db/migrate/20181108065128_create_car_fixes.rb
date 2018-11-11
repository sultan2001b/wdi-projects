class CreateCarFixes < ActiveRecord::Migration[5.2]
  def change
    create_table :fixes do |t|
      t.string :name
      t.integer :part_cost
      t.integer :hand_cost
      t.integer :issue_id

      t.timestamps
    end
  end
end
