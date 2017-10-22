# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

rng = Random.new(seed = 1853957493759375)
slat = 37.427
slon = -122.170
latdx = 1.5
londx = 3.5


5.times do |i|
  user = User.create(
    username: "user_#{i}",
    age: rng.rand(20),
    gender: rng.rand(3),
    conditions: rng.rand(2).times.to_a
  )

  20.times do |i|
    checkin = user.checkins.create!(
      lat: slat + rng.rand(latdx),
      lon: slon + rng.rand(londx),
      symptoms: rng.rand(10).times.to_a,
      factors: rng.rand(4).times.to_a,
    )
  end
end
