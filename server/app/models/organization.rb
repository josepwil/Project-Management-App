class Organization < ApplicationRecord
  has_one :admin
  has_many :users
end
