require 'test_helper'

class CheckinsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @checkin = checkins(:one)
  end

  test "should get index" do
    get checkins_url, as: :json
    assert_response :success
  end

  test "should create checkin" do
    assert_difference('Checkin.count') do
      post checkins_url, params: { checkin: { comment_factors: @checkin.comment_factors, comment_symptoms: @checkin.comment_symptoms, factors: @checkin.factors, lat: @checkin.lat, lon: @checkin.lon, symptoms: @checkin.symptoms } }, as: :json
    end

    assert_response 201
  end

  test "should show checkin" do
    get checkin_url(@checkin), as: :json
    assert_response :success
  end

  test "should update checkin" do
    patch checkin_url(@checkin), params: { checkin: { comment_factors: @checkin.comment_factors, comment_symptoms: @checkin.comment_symptoms, factors: @checkin.factors, lat: @checkin.lat, lon: @checkin.lon, symptoms: @checkin.symptoms } }, as: :json
    assert_response 200
  end

  test "should destroy checkin" do
    assert_difference('Checkin.count', -1) do
      delete checkin_url(@checkin), as: :json
    end

    assert_response 204
  end
end
