function Pproduct(product, productPrice, quantity, id) {
    this.product = product;
    this.productPrice = productPrice;
    this.quantity = quantity;
    this.id = id;
}

const automat = {
    showProduct0: 0,
    showProduct1: 0,
    showProduct2: 0,
    showProduct3: 0,
    showProduct4: 0,
    showProduct5: 0,
    showPrice: 0,
    productAll: new Array(),
    loginAdmin: "root",
    passwordAdmin: "root",
    showVar: 0,
    sum: 0,
    rest: {
        half: {
            value: 0.5,
            quantity: 0
        },
        one: {
            value: 1,
            quantity: 100
        },
        two: {
            value: 2,
            quantity: 100
        },
        five: {
            value: 5,
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

        const add = document.querySelector('.add');
        this.showProduct0 = document.querySelector(".p0");
        this.showProduct1 = document.querySelector(".p1");
        this.showProduct2 = document.querySelector(".p2");
        this.showProduct3 = document.querySelector(".p3");
        this.showProduct4 = document.querySelector(".p4");
        this.showProduct5 = document.querySelector(".p5");

        var showProduct0a = document.querySelector(".pa0");
        var showProduct1a = document.querySelector(".pa1");
        var showProduct2a = document.querySelector(".pa2");
        var showProduct3a = document.querySelector(".pa3");
        var showProduct4a = document.querySelector(".pa4");
        var showProduct5a = document.querySelector(".pa5");


        var i = 0;
        add.addEventListener('click', (event) => {
            newProduct = document.querySelector("#product");
            newProductPrice = document.querySelector("#price");
            newQuantity = document.querySelector("#quantity");
            this.productAll.push(new Pproduct(newProduct.value, newProductPrice.value, newQuantity.value, i));


            console.log(this.productAll[0]);
            console.log(this.productAll[1]);
            switch (i) {
                case 0:
                    this.showProduct0.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct0a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct0.id = i;
                    console.log(this.showProduct0.id);
                    this.showProduct1.value = this.productAll[i]["productPrice"];
                    break;
                case 1:
                    this.showProduct1.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct1a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct1.id = i;
                    break;
                case 2:
                    this.showProduct2.id = i;
                    this.showProduct2.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct2a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    break;
                case 3:
                    this.showProduct3.id = i;
                    this.showProduct3.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct3a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    break;
                case 4:
                    this.showProduct4.id = i;
                    this.showProduct4.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct4a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    break;
                case 5:
                    this.showProduct5.id = i;
                    this.showProduct5.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct5a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    break;

                default:
                    alert("Brak miejsca!");
                    break;
            }
            i++;

        });



    },
    dodwanie() {

        const baton1 = document.querySelector('.b1');
        const baton2 = document.querySelector('.b2');
        const baton3 = document.querySelector('.b3');
        const baton4 = document.querySelector('.b4');

        baton1.addEventListener('click', (event) => {
            this.showVar = document.querySelector('.showVar');
            this.rest.half.quantity++;
            this.sum += this.rest.half.value;
            this.showVar.innerText = this.sum;
        });

        baton2.addEventListener('click', (event) => {
            this.showVar = document.querySelector('.showVar');
            this.rest.one.quantity++;
            this.sum += this.rest.one.value;
            this.showVar.innerText = this.sum;
        });

        baton3.addEventListener('click', (event) => {
            this.showVar = document.querySelector('.showVar');
            this.rest.two.quantity++;
            this.sum += this.rest.two.value;
            this.showVar.innerText = this.sum;
        });

        baton4.addEventListener('click', (event) => {
            this.showVar = document.querySelector('.showVar');
            this.rest.five.quantity++;
            this.sum += this.rest.five.value;
            this.showVar.innerText = this.sum;
        });
    },
    select() {
        this.showProduct0 = document.querySelector(".p0");
        this.showProduct1 = document.querySelector(".p1");
        this.showProduct2 = document.querySelector(".p2");
        this.showProduct3 = document.querySelector(".p3");
        this.showProduct4 = document.querySelector(".p4");
        this.showProduct5 = document.querySelector(".p5");
        var showElement = document.getElementById('showElement');
        var zero = document.getElementById('0');
        var one = document.getElementById('1');
        const two = document.getElementById('2');
        const three = document.getElementById('3');
        const four = document.getElementById('4');
        const five = document.getElementById('5');
        const six = document.getElementById('6');
        const seven = document.getElementById('7');
        const eight = document.getElementById('8');
        const nine = document.getElementById('9');
        const c = document.getElementById('C');
        const OK = document.getElementById('OK');
        this.showPrice = document.getElementById('showPrice');
        zero.addEventListener('click', (event) => {
            showElement.innerText += 0;
        });
        one.addEventListener('click', (event) => {
            showElement.innerText += 1;
        });
        two.addEventListener('click', (event) => {
            showElement.innerText += 2;
        });
        three.addEventListener('click', (event) => {
            showElement.innerText += 3;
        });
        four.addEventListener('click', (event) => {
            showElement.innerText += 4;
        });
        five.addEventListener('click', (event) => {
            showElement.innerText += 5;
        });
        six.addEventListener('click', (event) => {
            showElement.innerText += 6;
        });
        seven.addEventListener('click', (event) => {
            showElement.innerText += 7;
        });
        eight.addEventListener('click', (event) => {
            showElement.innerText += 8;
        });
        nine.addEventListener('click', (event) => {
            showElement.innerText += 9;
        });
        c.addEventListener('click', (event) => {
            showElement.innerText = "";
        });
        OK.addEventListener('click', (event) => {
            console.log(this.showProduct0.value);
            switch (showElement) {
                case this.showProduct0.id:
                    this.showPrice.innerText = this.showProduct0.value;
                    break;
                case 1:

                    break;
                case 2:

                    break;
                case 3:

                    break;
                case 4:

                    break;
                case 5:

                    break;


                default:
                    alert("Wrong ID")
                    break;
            }


        });
    },
}

automat.produkty();
automat.controlPanel();
automat.dodwanie();
automat.select();