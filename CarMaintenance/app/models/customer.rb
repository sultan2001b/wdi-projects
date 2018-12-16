class Customer < ApplicationRecord
  has_many :issues, dependent: :delete_all
  has_many :fixes, through: :issues
end
