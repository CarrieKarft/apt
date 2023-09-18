class ApplicationController < ActionController::API
  include ActionController::Cookies

  before_action :authorize

  private

  def authorize
    return render json: {error: "You need to be logged in to access this"}, status: 422 unless session.include? :user_id
  end

end
