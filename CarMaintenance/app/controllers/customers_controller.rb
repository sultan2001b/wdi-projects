class CustomersController < ApplicationController
  before_action :set_customer, only: [:show, :edit, :card]

  def index
    # @customers = case params[:status]
    #              when "fixed" then Customer.where(fixed: true).order(:id)
    #              when "broken" then Customer.where(fixed: false).order(:id)
    #              else
    #                Customer.all
    #              end
    if params[:search] == nil ||  params[:search] == ""
 if params[:fixed] == "true"
        @customers = Customer.where(fixed: true)
      else
        @customers = Customer.where(fixed: false)
      end
    else
     if params[:fixed] == "true"
        @customers = Customer.where(fixed: true, id: params[:search])
      else
        @customers = Customer.where(fixed: false, id: params[:search])
      end
    end
  end
  
  def show
    @issues = @customer.issues
    @issue = Issue.new
  end

  def edit
  end

  def card
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

  def done
    customer = Customer.find_by(id: params[:id])
    if params[:return_undone] != "true"
      customer.fixed = true
      customer.fixed_date_time = DateTime.now
    else
      customer.fixed = false
      customer.fixed_date_time = nil
    end
    customer.save
    redirect_to request.referer
  end

  def set_customer
    @customer = Customer.find_by(id: params[:id])
  end

  private

  def customer_params
    params.require(:customer).permit(:name, :mobile, :car_name, :car_plate, :fixed, :fixed_date_time, :entery_date_time)
  end

  def customer_params2
    params.require(:customer).permit(:id)
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
