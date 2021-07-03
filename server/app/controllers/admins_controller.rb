class AdminsController < ApplicationController
  def create
    @admin = Admin.new(admin_params)
    @organization = Organization.new(organization_params)
    if @admin.save && @organization.save
      render json: {
        status: 'created',
        admin: @admin,
        organization: @organization
      }
  end

  private

  def admin_params
    params.require(:admin).permit(:email, :password, :firstName, :lastName)
  end

  def organization_params
    params.require(:organization).permit(:organization, :plan)
  end
  
end
