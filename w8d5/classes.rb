# What's a class ?

# Blueprint
# new Array, new Error, new Date

# Initialize an instance of a class


class Potato
  def initialize name
    @name = name
    @age = rand(30) + 10 # 10-40
    puts "Created a new potato instance"
  end

  attr_accessor :name, :age
  # attr_reader :name
  # attr_writer :name


  def greet
    puts "I AM A POTATO!"
    puts "My name is #{@name}"
  end

end

yukon = Potato.new("Yukon Gold")

p yukon.name
yukon.name = "Russett"
yukon.greet
p yukon.age
