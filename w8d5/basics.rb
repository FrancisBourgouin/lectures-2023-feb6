# Strings & ' vs " & #{}

p "bob #{10 + 10}"

p 'bob #{10 + 10}'

# Numbers

p 45.to_s

# Puts vs P

potato = "Big potato"

puts "I am a #{potato}"
p "I am a #{potato}"
pp "I am a #{potato}"

puts [1, 2, 3, 4]
p [1, 2, 3, [4, 3, 4, [5, 6, 7, 8, [7, 8, 89]]]]
pp [1, 2, 3, [4, 3, 4, [5, 6, 7, 8, [7, 8, 89]]]]

pollo = { name: "Pequeno Pollo" } # Hash

# Motherboard => Logic Board
