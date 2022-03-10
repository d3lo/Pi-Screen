Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'application#index'

  namespace :api, constraints: { format: 'json' } do
    post :marquee
  end
end
