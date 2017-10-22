class User < ApplicationRecord
  has_many :checkins
  
  enum gender: { male: 0, female: 1, other: 2 }
end
