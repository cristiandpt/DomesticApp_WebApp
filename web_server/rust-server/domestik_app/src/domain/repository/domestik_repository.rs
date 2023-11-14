pub trait DomestikRepository {
    fn get(&self, title: &str) {
        println!("{} is being fetched", title);
    }
    fn post(&self, title: &str) {
        println!("{} is being posted", title);
    }
    fn update(&self, title: &str) {
        println!("{} is being updated", title);
    }
    fn delete(&self, title: &str) {
        println!("{} is being deleted", title);
    }
}