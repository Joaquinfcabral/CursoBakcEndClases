//Desafio

class ProductManager {

    constructor() {
        this.products = []
    }

    getProducts = () => { return this.products }
    getProductId = () => {
        const amount = this.products.length;
        const productId = (amount > 0) ? this.products[amount - 1].id + 1 : 1;
        return productId;

    }
    getProductById = (productId) => {
        const productFound = this.products.find(element => element.id == productId)
        if (productFound) {
            console.log("El producto es:", productFound.title);
        } else {
            console.log("Su producto no fue encontrado");
        }
    }



    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            id: this.getProductId(),
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        const duplicatedCode = (element) => element.code == product.code;
        
        if (!this.products.some(duplicatedCode)) {
            this.products.push(product)
        } else {
            console.log("El código está duplicado")
        }
    }

}

const product = new ProductManager()

console.log("Inicio del ProductManager", product.getProducts());

product.addProduct("Lapicera", "De trazo fino, hecha de metal", 4, "Image", 04, 100)
product.addProduct("Lápiz", "De trazo grueso, hecha de grafito", 2, "Image", 09, 100)
product.addProduct("Cartuchera", "De Marvel, hecha de plástico con tela", 10, "Image", 08, 100)
product.addProduct("Cuaderno", "De tapa dura, con diseño de superheroes", 8, "Image", 06, 100)

product.getProductById(3)
console.log(product.getProducts());


