pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut sum = 0;
    let mut max = i32::MIN;

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
