class AddImageToCustomers < ActiveRecord::Migration[5.2]
  def change
    add_column :customers, :image, :string
  end
end
