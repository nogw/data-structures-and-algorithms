pub fn search(nums: Vec<i32>, target: i32) -> i32 {
    let mut min: usize = 0;
    let mut max: usize = nums.len() - 1;

    while (max - min) > 1 {
        let mid = (max + min) / 2;

        if nums[mid] < target {
            min = mid + 1
        } else {
            max = mid
        }
    }

    if nums[min] == target {
        return min as i32;
    }

    if nums[max] == target {
        return max as i32;
    }

    return 1;
}

fn main() {
    println!("704. Binary Search")
}
