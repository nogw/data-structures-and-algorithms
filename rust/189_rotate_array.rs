pub fn rotate(nums: &mut Vec<i32>, k: i32) {
    let len = nums.len() - 1;

    for _ in 0..k as usize {
        let tmp = nums[len];

        nums.remove(len);
        nums.insert(0, tmp);
    }
}

fn main() {
    println!("186 Rotate Array, Lazy solution ;/")
}
