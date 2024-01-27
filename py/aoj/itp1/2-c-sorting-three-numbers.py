
# 3つ受け取る
a, b, c = map(int, input().split(" "))

# aとbを比較
if a > b:
    a, b = b, a

# aとcを比較
if a > c:
    a, c = c, a
    
# bとcを比較
if b > c:
    b, c = c, b

print(f"{a} {b} {c}")