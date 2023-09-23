Rails.application.routes.draw do
  
  resources :appartments, only: [:index, :show, :create]
  resources :applications, except: [:index]
  resources :sessions, only: [:create, :destroy]
  resources :users, except: [:index]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
