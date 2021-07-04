class ChangeNameInOrganization < ActiveRecord::Migration[6.1]
  def change
    rename_column :organizations, :name, :organization_name
  end
end
