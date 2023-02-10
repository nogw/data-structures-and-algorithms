pub fn maximum_subarray(nums: Vec<i32>) -> i32 {
    let mut max = 0;
    let mut sum = 0;

    for num in 0..nums.len() {
        sum += nums[num];
        max = std::cmp::max(sum, max);

        if sum < 0 {
            sum = 0
        }
    }

    max
}

fn main() {
    println!("53 Maximum Subarray");
}
