package main

import (
	"fmt"
)

func removeDuplicates(nums []int) int {
	j := 1

	for i := 0; i < len(nums)-1; i++ {
		if nums[i] != nums[i+1] {
			nums[j] = nums[i+1]
			j++
		}
	}

	return j
}

func main() {
	fmt.Printf("%v", removeDuplicates([]int{1, 1, 2}))
}
