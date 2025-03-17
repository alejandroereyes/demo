module Api
  class UsersController < ApplicationController
    def index
      render json: current_user.to_json
    end
  end
end
