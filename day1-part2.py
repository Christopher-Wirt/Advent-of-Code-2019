import math

def calcFuel( mass ):
    if(mass <= 0):
        return 0
    fuel = math.floor(mass / 3) - 2
    if fuel <= 0:
        return 0
    return fuel + calcFuel(fuel)

f = open('day1-input.txt', 'r')
x = f.readlines()
f.close()

print(len(x))

sum = 0
for mass in x:
    sum = sum + calcFuel(int(mass))

print(sum)