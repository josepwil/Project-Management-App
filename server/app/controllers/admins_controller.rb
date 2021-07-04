class AdminsController < ApplicationController
  def create
    puts params
    @organization = Organization.new(organization_params)
    @admin = Admin.new(admin_params)
    if @admin.save && @organization.save
      render json: {
        status: 'created',
        admin: @admin,
        organization: @organization
      }
    end
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :first_name, :last_name)
  end

  def organization_params
    params.require(:organization).permit(:organization_name, :plan)
  end
  
end
