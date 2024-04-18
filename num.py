def containsDuplicate(nums):
    num_set = set()
    for num in nums:
        if num in num_set:
            return True
        num_set.add(num)
    return False

# Test cases
nums1 = [1,2,3,1]
print(containsDuplicate(nums1)) # True

nums2 = [1,2,3,4]
print(containsDuplicate(nums2)) # False

nums3 = [1,1,1,3,3,4,3,2,4,2]
print(containsDuplicate(nums3)) # True
