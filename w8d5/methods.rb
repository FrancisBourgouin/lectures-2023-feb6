def say_hi name
  puts "Hi #{name} !!"
end

say_hi "Ivan"


def say_hi_a_bunch_of_times name, amount
  amount.times do
    puts "Hi #{name}"
    sleep(1)
  end
end

say_hi_a_bunch_of_times "Lupita", 10

puts "The end!"
