class ProfileController < ApplicationController
  before_action :authenticate_user!
  def index
  end

  def update
    redirect_to profile_path
  end
end
