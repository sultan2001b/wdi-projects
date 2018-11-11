require 'test_helper'

class CarEnteriesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get car_enteries_index_url
    assert_response :success
  end

  test "should get show" do
    get car_enteries_show_url
    assert_response :success
  end

  test "should get edit" do
    get car_enteries_edit_url
    assert_response :success
  end

  test "should get update" do
    get car_enteries_update_url
    assert_response :success
  end

  test "should get create" do
    get car_enteries_create_url
    assert_response :success
  end

  test "should get new" do
    get car_enteries_new_url
    assert_response :success
  end

end
