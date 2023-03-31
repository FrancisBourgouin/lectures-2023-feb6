# =>, [], :symbol

# Arrays

cities  = [ "London", "Oslo", "Paris", "Amsterdam", "Berlin" ]
visited = ["Berlin", "Oslo"]

puts "I still need to visit the following cities: #{(cities - visited).to_s}"

puts visited.empty?
puts visited.include?("Montreal")
# Hashes


list = [1,2,3,nil,5,6,nil]

compacted_list = list.compact!
p list.rotate!
p list.rotate!
p list.rotate!
p list.rotate!
p list.rotate!
p list


dice = [1,2,3,4,5,6]

dice.shuffle
