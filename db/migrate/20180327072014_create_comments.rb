class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :upvotes, default: 0
      t.integer :post_id

      t.timestamps
    end
  end
end
