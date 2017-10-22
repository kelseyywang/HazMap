class Checkin < ApplicationRecord
  belongs_to :user

  serialize :symptoms
  serialize :factors

  # attr_accessor :lat
  # attr_accessor :lon

  def string_symptoms
    symptom = [
      :vomiting,
      :eye_irritation,
      :diarrhea,
      :nausea,
      :stomach_pain,
      :persisting_cough,
      :shortness_of_breath,
      :skin_irritation,
      :stiff_neck,
      :stiff_back,
    ]
    symptoms.map { |s| symptom[s].to_s }
  end

  def string_factors
    factor = [
      :air,
      :water,
      :food,
      :chemical,
    ]
    factors.map { |f| factor[f].to_s }
  end

  def coords
    [lat, lon]
  end

  def self.get_clusters(centroids = 10)
    # Return a list of tuples (lat, lon, radius, type)
    data = self.all.map { |c| c.coords }
    puts data
    kmeans = KMeans.new(data, centroids: 10)
    tuples = []
    nodes = kmeans.nodes

    kmeans.centroids.each do |centroid|
      num_children = nodes.select { |n| n.closest_centroid == centroid }.length
      tuples << [centroid.position[0], centroid.position[1], num_children]
    end
    tuples
  end
end
