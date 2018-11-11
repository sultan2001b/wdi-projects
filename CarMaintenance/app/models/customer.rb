class Customer < ApplicationRecord
      has_many :issues , dependent: :delete_all

end
