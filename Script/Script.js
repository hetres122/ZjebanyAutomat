const automat = {
    loginAdmin: "root",
    passwordAdmin: "root",
    products: {
        blackCoffee: {
            id: 0,
            value: 2.5,
            quantity: 100
        },
    },
    controlPanel() {
        var move = document.querySelector('.pA');
        var automatClick = document.querySelector('.Automat1')
        var page1 = document.querySelector('.page1');
        var page2 = document.querySelector('.page2');
        var page3 = document.querySelector('.page3');
        var login = "";
        var password = "";
        var automatClick2 = document.querySelector('.Automat2');


        move.addEventListener('click', (event) => {
            page1.style.display = "none";
            page2.style.display = "block";
        });
        automatClick.addEventListener('click', (event) => {
            page2.style.display = "none"
            page1.style.display = "block"

        });

        var signIn = document.querySelector('.signIn');
        signIn.addEventListener('click', (event) => {
            login = document.querySelector('#login');
            password = document.querySelector('#password');
            if (login.value == this.loginAdmin && password.value == this.passwordAdmin) {

                page2.style.display = "none";
                page3.style.display = "block";

            } else {
                alert("Wrong password");

            }

        });
        automatClick2.addEventListener('click', (event) => {
            page3.style.display = "none";
            page1.style.display = "block";
        });

    },


    produkty() {
        var newProduct = "";
        var newProductPrice = 0;
        var newQuantity = 0;
        var newID = 0;
        var ID = 0;
        var quantity = 0;
        var productPrice = 0;
        var product = "";
        const add = document.querySelector('.add');
        add.addEventListener('click', (event) => {
            newProduct = document.querySelector("#product");
            newProductPrice = document.querySelector("#price");
            newQuantity = document.querySelector("#quantity");
            newID = document.querySelector("#id");
            ID = newID.value;
            quantity = newQuantity.value;
            productPrice = newProductPrice.value;
            product = newProduct.value;

            console.log(this.products);
            this.products.product = {};
            // this.products.product.id = +ID;
            // this.products.product.value = +productPrice;
            // this.products.product.quantity = +quantity;
            console.log(this.products);
        });
    },
    dodwanie() {

        const baton1 = document.querySelector('.b1');
        const baton2 = document.querySelector('.b2');
        const baton3 = document.querySelector('.b3');
        const baton4 = document.querySelector('.b4');

        baton1.addEventListener('click', (event) => {

        });

        baton2.addEventListener('click', (event) => {

        });

        baton3.addEventListener('click', (event) => {

        });

        baton4.addEventListener('click', (event) => {

        });
    },
}
automat.produkty();
automat.controlPanel();
automat.dodwanie();