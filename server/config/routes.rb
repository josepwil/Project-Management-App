Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: 'welcome#index'
  # resources :users, only: [:create]
  resources :admins, only: [:create]
end
