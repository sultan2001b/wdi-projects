Rails.application.routes.draw do
 resources :customers, :fixes, :issues 
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'customers#index' 
end
