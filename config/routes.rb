Rails.application.routes.draw do
    resources :apartments, only: [:index, :show, :create]
    resources :applications
    resources :sessions, only: [:create, :destroy]
    resources :users, except: [:index, :show]
    get '/me', to: "users#show"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
