Rails.application.routes.draw do
  resources :checkins do
    get 'clusters', to: 'checkins#clusters'
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'users#index'
end
