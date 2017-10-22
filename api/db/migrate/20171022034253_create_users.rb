class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :age
      t.text :conditions

      t.timestamps
    end
  end
end
