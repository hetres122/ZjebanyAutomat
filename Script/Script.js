const automat = {
    nazwa: "",
    cena: 0,

    produkty() {

        var btn = document.querySelector("btn");
        btn = document.addEventListener('click', (event) => {
            this.nazwa = document.querySelector("nazwa");
            this.cena = document.querySelector("cena");
            console.log(this.nazwa);
            console.log(this.cena);


        });
    },


}
automat.produkty();