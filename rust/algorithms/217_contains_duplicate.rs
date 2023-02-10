pub fn contains_duplicate(nums: Vec<i32>) -> bool {
    use std::collections::HashMap;

    let mut map: HashMap<&i32, usize> = HashMap::new();

    for (index, i) in nums.iter().enumerate() {
        if map.contains_key(&i) {
            return true;
        }

        map.insert(i, index);
    }

    return false;
}

pub fn contains_duplicate_alternative(nums: Vec<i32>) -> bool {
    use std::collections::HashSet;

    let set: HashSet<i32> = HashSet::from_iter(nums.iter().cloned());

    return set.len() != nums.len();
}

fn main() {
    println!("217 Contains Duplicate");
}
