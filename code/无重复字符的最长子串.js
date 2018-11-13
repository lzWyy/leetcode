/**
 *  给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 
      示例 1:

      输入: "abcabcbb"
      输出: 3 
      解释: 无重复字符的最长子串是 "abc"，其长度为 3。

      示例 2:

      输入: "bbbbb"
      输出: 1
      解释: 无重复字符的最长子串是 "b"，其长度为 1。
      示例 3:

      输入: "pwwkew"
      输出: 3
      解释: 无重复字符的最长子串是 "wke"，其长度为 3。
          请注意，答案必须是一个子串，"pwke" 是一个子序列 而不是子串。
 * 
 */

const str = "abcabcbbqweqweqwewq"

let lengthOfLongestSubstring = function(str) {
  let arr = str.split('')
  let len = arr.length
  let max = 0
  let maxStr = ''
  for (let i = 0; i < len; i++) {
    let newStr = ''
    let count = 0
    for (let j = i; j < len; j ++) {
      let reg = new RegExp(arr[j])
      if (!reg.test(newStr)) {
        newStr = newStr.concat(arr[j])
        count += 1
      } else {
        i = newStr.indexOf(arr[j]) > 0 ? i + newStr.indexOf(arr[j]) : i
        if (max < count) {
          maxStr = newStr
          max = count
        }
        break
      }
    }
  }
  console.log(max, maxStr)
}

lengthOfLongestSubstring(str)