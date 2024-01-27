# 長方形右上頂点座標(W, H)、円の中心座標(x, y)、半径r
W, H, x, y, r = map(int, input().split(" "))

# 左にはみ出る
if x - r < 0:
  print("No")
  exit(0)

# 右にはみ出る
if x + r > W:
  print("No")
  exit(0)

# 下にはみ出る
if y - r < 0:
  print("No")
  exit(0)

# 上にはみ出る
if y + r > H:
  print("No")
  exit(0)

print("Yes")





