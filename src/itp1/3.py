a = int(input())
b = int(input())

if a <= 100 or a >= 1 or b <= 100 or b >= 1:
    area = a * b
    perimeter = 2 * (a + b)
    print(area, perimeter)
