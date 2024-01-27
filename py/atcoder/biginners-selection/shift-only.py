N = int(input())
numbers = list(map(int, input().split()))
processCount = 0

while (len(numbers) == N and all(num % 2 == 0 for num in numbers)):
    numbers = [num / 2 for num in numbers]
    processCount += 1

print(processCount)


