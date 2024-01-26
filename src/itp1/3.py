list = input().split(" ")
a = int(list[0])
b = int(list[1])

if 1 <= a <= 100 and 1 <= b <= 100:
    print(a * b, 2 * (a + b))
