pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
    let mut min = 0;
    let mut max = nums.len() - 1;

    while min <= max {
        let mid = (min + max) / 2;

        if nums[mid] == target {
            return mid as i32;
        } else if nums[mid] < target {
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }

    return (max + 1) as i32;
}

fn main() {
    println!("35. Search Insert Position")
}
