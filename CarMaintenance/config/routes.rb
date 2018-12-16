Rails.application.routes.draw do
  root "customers#index"
  resources :customers, :fixes, :issues
  get '/customers/:id/done', to: 'customers#done', as: 'done_customer'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
