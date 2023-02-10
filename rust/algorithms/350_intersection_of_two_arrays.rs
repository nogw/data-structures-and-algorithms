use std::collections::HashMap;

pub fn intersect(nums1: Vec<i32>, nums2: Vec<i32>) -> Vec<i32> {
    let mut hash: HashMap<i32, usize> = HashMap::new();

    for num in nums1 {
        *hash.entry(num).or_default() += 1
    }

    let mut accu = Vec::new();

    for n in nums2 {
        if let Some(c) = hash.get_mut(&n) {
            if *c > 0 {
                accu.push(n as i32);
                *c -= 1;
            }
        }
    }

    accu
}

fn main() {}

#[cfg(test)]
mod test {
    #[test]
    fn it_works() {
        unimplemented!();
    }
}
