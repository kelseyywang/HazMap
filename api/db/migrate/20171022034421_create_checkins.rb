class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.float :lat
      t.float :lon
      t.text :symptoms
      t.text :comment_symptoms
      t.text :factors
      t.text :comment_factors

      t.timestamps
    end
  end
end
