class IssuesController < ApplicationController
  def edit
    @issue = Issue.find_by(id: params[:id])
  end

  def update
    issue = Issue.find_by(id: params[:id])
    issue.update(issue_params2)
    redirect_to customer_path issue.customer
  end

  def create
    Issue.create(issue_params)
    redirect_to request.referer
    # rise
    # redirect_to CarEntery_path car.car_entery.id
  end

  def new
    @issue = Issue.new
  end

  def destroy
    Issue.destroy(params[:id])
    redirect_to request.referer
  end

  def index
  end

  private

  def issue_params
    params.require(:issue).permit(:name, :customer_id)
  end

  def issue_params2
    params.require(:issue).permit(:name)
  end

  #     t.string "name"
  #     t.integer "car_entery_id"
  #     t.datetime "created_at", null: false
  #     t.datetime "updated_at"

end
