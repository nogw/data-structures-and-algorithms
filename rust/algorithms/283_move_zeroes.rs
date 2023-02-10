pub fn move_zeroes(nums: &mut Vec<i32>) {
    let mut j = 0;

    for i in 0..nums.len() {
        if nums[i] != 0 {
            let tmp = nums[j];

            nums[j] = nums[i];
            nums[i] = tmp;

            j += 1;
        }
    }
}

fn main() {
    println!("283. Move Zeroes")
}

#[cfg(test)]
mod tests {
    use crate::move_zeroes;

    #[test]
    fn it_works() {
        let mut received = Vec::from([0, 1, 0, 3, 12]);
        let expected = Vec::from([1, 3, 12, 0, 0]);

        move_zeroes(&mut received);

        assert_eq!(received, expected)
    }
}
