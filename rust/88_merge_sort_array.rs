pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
    let mut x = m as usize;
    let mut y = n as usize;

    for i in (0..x + y).rev() {
        match (x == 0, y == 0) {
            (true, false) => {
                y -= 1;
                nums1[i] = nums2[y];
            }
            (false, true) => {
                x -= 1;
                nums1[i] = nums1[x];
            }
            (_, _) => {
                if nums1[x - 1] > nums2[y - 1] {
                    x -= 1;
                    nums1[i] = nums1[x];
                } else {
                    y -= 1;
                    nums1[i] = nums2[y];
                }
            }
        }
    }
}

fn main() {
    println!("88. Merge Sorted Array")
}
