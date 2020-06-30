Rails.application.routes.draw do
  root "gachas#index"
  resources :gachas, only: :index
end
