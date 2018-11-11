require 'test_helper'

class CarFixesControllerTest < ActionDispatch::IntegrationTest
  test "should get edit" do
    get car_fixes_edit_url
    assert_response :success
  end

  test "should get update" do
    get car_fixes_update_url
    assert_response :success
  end

  test "should get create" do
    get car_fixes_create_url
    assert_response :success
  end

  test "should get new" do
    get car_fixes_new_url
    assert_response :success
  end

end
