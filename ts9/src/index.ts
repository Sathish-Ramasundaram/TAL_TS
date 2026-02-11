function LogProperty(target: any, key: string) {
  console.log("Property registered:", key);
}

class Product {
  @LogProperty
  name: string = "Book";
}

new Product();