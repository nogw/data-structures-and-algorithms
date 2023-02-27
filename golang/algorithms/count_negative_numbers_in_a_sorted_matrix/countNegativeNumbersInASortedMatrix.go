package countNegativeNumbersInASortedMatrix

func countNegatives(grid [][]int) int {
	m := len(grid)
	n := len(grid[0])
	counter := 0

	for i := 0; i < m; i++ {
		j := n - 1

		for ; j >= 0 && grid[i][j] < 0; j-- {
			counter++
		}
	}

	return counter
}
