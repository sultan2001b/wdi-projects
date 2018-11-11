require 'test_helper'

class CarIssuesControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get car_issues_edit_url
    assert_response :success
  end

  test "should get update" do
    get car_issues_update_url
    assert_response :success
  end

  test "should get create" do
    get car_issues_create_url
    assert_response :success
  end

  test "should get new" do
    get car_issues_new_url
    assert_response :success
  end

end
