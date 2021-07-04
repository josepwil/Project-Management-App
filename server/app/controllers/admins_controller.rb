class AdminsController < ApplicationController
  def create
    @organization = Organization.new(organization_params)
    @admin = Admin.new(admin_params)

    if @organization.save
      @admin.organization_id = @organization.id
    end

    if @admin.save
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
