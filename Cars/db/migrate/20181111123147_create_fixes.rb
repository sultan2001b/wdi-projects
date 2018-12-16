class CreateFixes < ActiveRecord::Migration[5.2]
  def change
    create_table :fixes do |t|
      t.string :name

      t.timestamps
    end
  end
end
