Rails.application.routes.draw do
  resources :checkins do
    collection do
      get 'clusters', to: 'checkins#clusters'
      get 'coords', to: 'checkins#coords'
    end
  end
  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'users#index'
end
