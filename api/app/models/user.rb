class User < ApplicationRecord
  has_many :checkins

  enum gender: { male: 0, female: 1, other: 2 }

  serialize :conditions

  def string_conditions
    condition = [
      :chronic_hiccups,
      :gastric_implosion,
    ]
    conditions.map { |c| condition[c].to_s }
  end
end
