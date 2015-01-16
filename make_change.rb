def make_change_american(value, denominations)
  coins = []
  return coins if denominations == []
  if value >= denominations.first
    value -= denominations[0]
    coins << denominations[0]
    coins += make_change_american(value, denominations)
  else
    denominations = denominations[1..-1]
    coins += make_change_american(value, denominations)
  end
  coins
end

require 'byebug'

def make_change(value, denominations)
  return [] if value <= 0

  most_coins = value / denominations.min
  smallest_combo = Array.new(most_coins, denominations.min)

    denominations.each do |denom|
      if value >= denom
        next_change = make_change(value - denom, denominations)
        if next_change.length < smallest_combo.length
          smallest_combo = next_change
          smallest_combo += [denom]
        end
      end
    end

  smallest_combo

end


p make_change(14, [10, 7, 1])
