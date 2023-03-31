# == != && ||

some_value = 1
some_other_value = "1"

if some_value == some_other_value
  puts "YEAH SAME VALUES!"
elsif some_value = some_other_value.to_i
  puts "ALMOST THE SAME, different types"
else
  puts "really different"
end


user = {
  :name => "Pollo",
  :role => "user"
}
user_two = { name:"bob", role:"admin" }

if user[:role] != "admin"
  puts "you are not authorized"
end

unless user[:role] == "admin"
  puts "you are not authorized"
end

puts "you are not authorized" unless user[:role] == "admin"
puts "you are authorized" if user_two[:role] == "admin"


puts 1 <=> 1
puts 1 <=> 2
puts 3000 <=> 2

puts "bb" <=> "g"
