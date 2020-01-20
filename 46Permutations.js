/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if(nums.length < 2) {
        return [nums]
    } else {
        let perm = []
        for(let i = 0; i < nums.length; i++) {
            let rest = nums.slice()
            rest.splice(i, 1)
            
            let ps = permute(rest)
            
            const current = [nums[i]]
            for(let p of ps) {
                perm.push(current.concat(p))
            }
        }
        return perm
    }
};