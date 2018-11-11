class Issue < ApplicationRecord
      belongs_to :customer
        has_many  :fixes, dependent: :delete_all
end
