# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rng = Random.new(seed = 1853957493759375)

lats = [37.427, 37.620, 37.343, 37.405, 37.512]
lons = [-122.170, -122.148, -122.320, -122.250, -122.333]
latdx = 0.03
londx = 0.07

5.times do |i|
  user = User.create(
    username: "user_#{i}",
    age: rng.rand(20),
    gender: rng.rand(3),
    conditions: rng.rand(2).times.to_a
  )

  20.times do |j|
    checkin = user.checkins.create!(
      lat: lats[i] + rng.rand(latdx),
      lon: lons[i] + rng.rand(londx),
      symptoms: rng.rand(10).times.to_a,
      factors: rng.rand(4).times.to_a,
    )
  end
end
