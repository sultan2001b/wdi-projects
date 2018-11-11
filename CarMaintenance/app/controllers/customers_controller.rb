class CustomersController < ApplicationController
  def index
    @customers = Customer.where(fixed: false)
  end

  def show
    @customer = Customer.find_by(id: params[:id])
    @issue = Issue.new
  end

  def edit
    @customer = Customer.find_by(id: params[:id])
  end

  def update
    customer = Customer.find_by(id: params[:id])
    customer.update(customer_params)
    redirect_to customers_path
  end

  def create
    Customer.create(customer_params)
    redirect_to customers_path
  end

  def new
    @customer = Customer.new
  end

  def customer_params
    params.require(:customer).permit(:name, :mobile, :car_name, :car_plate, :fixed, :fixed_date_time)
  end

  # t.string "customer_name"
  # t.string "mobile"
  # t.string "car_name"
  # t.string "car_plate"
  # t.boolean "fixed"
  # t.datetime "fixed_date_time"
  # t.datetime "created_at", null: false
  # t.datetime "updated_at", null:
end
