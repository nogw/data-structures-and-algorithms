use std::collections::{HashMap, HashSet};

pub fn word_pattern(pattern: String, s: String) -> bool {
    let mut words_seen_set = HashSet::new();
    let mut patts_seen_map = HashMap::new();

    let words: Vec<&str> = s.split_ascii_whitespace().collect();

    if words.len() != pattern.len() {
        return false;
    }

    for (symbol, word) in pattern.chars().zip(words.into_iter()) {
        match patts_seen_map.get(&symbol) {
            None => {
                if words_seen_set.contains(word) {
                    return false;
                }

                patts_seen_map.insert(symbol, word);
            }
            Some(&expected) => {
                if expected != word {
                    return false;
                }
            }
        }

        words_seen_set.insert(word);
    }

    true
}

fn main() {
    println!("290. Word Pattern")
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let expect = true;
        assert_eq!(
            word_pattern(String::from("abba"), String::from("dog cat cat dog")),
            expect
        );
    }
}
