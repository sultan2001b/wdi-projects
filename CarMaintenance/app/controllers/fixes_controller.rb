class FixesController < ApplicationController
  def edit
    @fix = Fix.find_by(id: params[:id])
  end

  def update
    fix = Fix.find_by(id: params[:id])
    fix.update(fix_params_for_update)
     redirect_to customer_path fix.issue.customer.id
  end

  def create
    Fix.create(fix_params)
    redirect_to request.referer
    # redirect_to customer_path car.customer.id
  end

  def new
    @fix = Fix.new
  end

  def destroy
    fix = Fix.destroy(params[:id])
    redirect_to request.referer
  end

  private
  def fix_params
    params.require(:fix).permit(:name, :part_cost, :hand_cost, :issue_id)
  end
  def fix_params_for_update
    params.require(:fix).permit(:name, :part_cost, :hand_cost)
  end

  #  t.string "part_name"
  #     t.integer "part_cost"
  #     t.integer "hand_cost"
  #     t.integer "total_cost"
  #     t.integer "car_issue_id"
  #     t.datetime "created_at", null: false
  #     t.datetime "updated_at", null

end
