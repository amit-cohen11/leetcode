from typing import List

def longestCommonPrefix(strs: List[str]) -> str:
  prefix = strs[0]
  i = 1
  while(i < len(strs)):
    if (not strs[i].startswith(prefix)):
      prefix = prefix[:-1]
    elif (prefix == ""):
      return prefix
    else:
      i += 1
  return prefix

if (__name__ == "__main__"):
  print(longestCommonPrefix(strs = ["flower","flow","flight"]))
  print(longestCommonPrefix(strs = ["dog","racecar","car"]))