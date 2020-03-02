const automat = {
    nazwa: "",
    cena: 0,

    produkty() {
        const newProduct = document.forms[0];
        const newProductPrice = document.querySelector("#price");
        const btn = document.querySelector('.btn');
        btn.addEventListener('click', (event) => {

            console.log(newProduct);
            console.log(newProductPrice);
        });
    },


}
automat.produkty();