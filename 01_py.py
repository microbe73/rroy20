#Allows us to pick a random number
import random
#Creates the lists for periods 1 and 2
pd1 = ["Rayat Roy", "Michelle Lo", "Theodore Fahey", "Lucas Lee", "William Chen"
       , "Renguang Zheng", "Aryman Goenka", "Owen Yaggy"]
pd2 = ["Joshua Kloepfer", "Alif Abdullah", "Yoonah Chang", "Fake Name 1",
       "Fake Name 2", "Fake Name 3", "Fake Name 4"]
#Allows the user to choose if they want a name from period 1, period 2, or from either
a = input("Enter 1 or 2 for a name from period 1 or period 2 respectively. Enter 3 for a random name from either")
#random period 1 name
if(a=="1"):
    x = random.randint(0,len(pd1)-1)
    print(pd1[x])
#random period 2 name
else if(a=="2"):
    x = random.randint(0,len(pd2)-1)
    print(pd2[x])
#random period 3 name
else if(a=="3"):
    total = pd1 + pd2
    x = random.randint(0,len(total)-1)
    print(total[x])
#for anything not 1-3
else:
    print("Invalid entry")
