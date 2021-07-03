class AddColumnsToAdmin < ActiveRecord::Migration[6.1]
  def change
    add_column :admins, :email, :string
    add_column :admins, :first_name, :string
    add_column :admins, :last_name, :string
    add_column :admins, :password, :string
    remove_column :admins, :name
  end
end
