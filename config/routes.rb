Rails.application.routes.draw do
  root 'root#index'
  # resources :greetings, only: [:index]
  namespace :api do
      resources :greetings, only: [:index]
  end
end