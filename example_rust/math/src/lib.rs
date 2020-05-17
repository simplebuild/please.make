pub fn sum(a: i32, b: i32) -> i32 {
    return a + b;
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(sum(2, 2), 4);
    }
}
