pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut vec = Vec::new();

    for i in 0..nums.len() {
        for j in (i + i)..nums.len() {
            if nums[i] + nums[j] == target {
                vec = Vec::from([i as i32, j as i32]);
            }
        }
    }

    vec
}

fn main() {
    println!("1. Two sum - bruteforce ;(")
}
