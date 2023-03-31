# Blocks!

def fancy_message_wrapper
  puts "**--**--####--**--**"
  yield
  puts "**--**--####--**--**"
end

fancy_message_wrapper {puts "Hi Feb 06 class! :D"}
