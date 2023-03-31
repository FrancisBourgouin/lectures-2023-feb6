# list = ["Coffee", "Tea", "Mate", "Water"]

# each Tuple =>

# each_with

# for

# 10.upto(20)
# Pagination
# 500
# 0-10, 10-20, 20-30

# value.upto(value + 10)

# while something do

# end

list_of_drinks = ["Coffee","Mate","Tea"]
drink_hash = {
  :morning => "Coffee",
  :all_day => "Mate",
  :evening => "Tea"
}


# list_of_drinks.each do |drink|
#   puts "Drinking #{drink}"
# end

# list_of_drinks.each_with_index do |drink, index|
#   puts "Drinking #{drink} (drink is at position #{index})"
# end

drink_hash.each do |drink|
  p drink
  puts "Drinking #{drink[1]} (drink is at position #{drink[0]})"
end

for drink in drink_hash do
  p drink
end

10.times do
  puts "🥔🥔🥔🥔🥔🥔🥔🥔🥔"
end


amount_of_times = 5

amount_of_times.times do
  #...
end

value = 10
value.upto(20) do |val|
  puts val
end
