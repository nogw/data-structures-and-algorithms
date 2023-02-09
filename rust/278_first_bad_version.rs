// struct implemented on LeetCode
pub fn first_bad_version(&self, n: i32) -> i32 {
    let mut from = 1;
    let mut last = n;
    let mut curr = 1;

    while from <= last {
        let mid = from + (last - from) / 2;

        if self.isBadVersion(mid) {
            curr = mid;
            last = mid - 1;
        } else {
            from = mid + 1;
        }
    }

    return curr;
}

fn main() {
    println!("278 First Bad Version")
}
