function Pproduct(product, productPrice, quantity, id) {
    this.product = product;
    this.productPrice = productPrice;
    this.quantity = quantity;
    this.id = id;
}

const automat = {
    history: "",
    producthistory: "",
    price: 0,
    showProduct0: "",
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

        var deleteProduct1 = document.getElementById("DP1");
        var deleteProduct2 = document.getElementById("DP2");
        var deleteProduct3 = document.getElementById("DP3");
        var deleteProduct4 = document.getElementById("DP4");
        var deleteProduct5 = document.getElementById("DP5");
        var deleteProduct6 = document.getElementById("DP6");

        var flag1 = false;
        var flag2 = false;
        var flag3 = false;
        var flag4 = false;
        var flag5 = false;
        var flag6 = false;



        var i = 0;
        add.addEventListener('click', (event) => {
            newProduct = document.querySelector("#product");
            newProductPrice = document.querySelector("#price");
            newQuantity = document.querySelector("#quantity");
            this.productAll.push(new Pproduct(newProduct.value, newProductPrice.value, newQuantity.value, i));




            switch (false) {
                case flag1:
                    this.showProduct0.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct0a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct0.setAttribute("id", i);
                    this.showProduct0.value = this.productAll[i]["productPrice"];
                    flag1 = true;



                    break;
                case flag2:
                    this.showProduct1.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct1a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct1.setAttribute("id", i);
                    this.showProduct1.value = this.productAll[i]["productPrice"];
                    flag2 = true;
                    break;
                case flag3:

                    this.showProduct2.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct2a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct2.setAttribute("id", i);
                    this.showProduct2.value = this.productAll[i]["productPrice"];
                    flag3 = true;
                    break;
                case flag4:

                    this.showProduct3.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct3a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct3.setAttribute("id", i);
                    this.showProduct3.value = this.productAll[i]["productPrice"];
                    flag4 = true;
                    break;
                case flag5:

                    this.showProduct4.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct4a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct4.setAttribute("id", i);
                    this.showProduct4.value = this.productAll[i]["productPrice"];
                    flag5 = true;
                    break;
                case flag6:

                    this.showProduct5.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    showProduct5a.innerHTML = this.productAll[i]["product"] + "<br>" + "Price:" + this.productAll[i]["productPrice"] + "<br>" + "ID:" + i;
                    this.showProduct5.setAttribute("id", i);
                    this.showProduct5.value = this.productAll[i]["productPrice"];
                    flag6 = true;
                    break;

                default:
                    alert("Brak miejsca!");
                    break;
            }
            i++;

        });
        deleteProduct1.addEventListener('click', (event) => {
            this.showProduct0.innerHTML = "------";
            showProduct0a.innerHTML = "------";
            flag1 = false;
        });
        deleteProduct2.addEventListener('click', (event) => {
            this.showProduct1.innerHTML = "------";
            showProduct1a.innerHTML = "------";
            flag2 = false;
        });
        deleteProduct3.addEventListener('click', (event) => {
            this.showProduct2.innerHTML = "------";
            showProduct2a.innerHTML = "------";
            flag3 = false;
        });
        deleteProduct4.addEventListener('click', (event) => {
            this.showProduct3.innerHTML = "------";
            showProduct3a.innerHTML = "------";
            flag4 = false;
        });
        deleteProduct5.addEventListener('click', (event) => {
            this.showProduct4.innerHTML = "------";
            showProduct4a.innerHTML = "------";
            flag5 = false;
        });
        deleteProduct6.addEventListener('click', (event) => {
            this.showProduct5.innerHTML = "------";
            showProduct5a.innerHTML = "------";
            flag6 = false;
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

        var now = new Date();
        var html = `
        ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
        `;

        this.showProduct0 = document.querySelector(".p0");
        this.showProduct1 = document.querySelector(".p1");
        this.showProduct2 = document.querySelector(".p2");
        this.showProduct3 = document.querySelector(".p3");
        this.showProduct4 = document.querySelector(".p4");
        this.showProduct5 = document.querySelector(".p5");
        var showElement = document.getElementById('showElement');
        var l = "";
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
        this.history = document.getElementById('history');

        zero.addEventListener('click', (event) => {
            showElement.innerText += 0;
            l += 0;

        });
        one.addEventListener('click', (event) => {
            showElement.innerText += 1;
            l += 1;

        });
        two.addEventListener('click', (event) => {
            showElement.innerText += 2;
            l += 2;

        });
        three.addEventListener('click', (event) => {
            showElement.innerText += 3;
            l += 3;
        });
        four.addEventListener('click', (event) => {
            showElement.innerText += 4;
            l += 4;
        });
        five.addEventListener('click', (event) => {
            showElement.innerText += 5;
            l += 5;
        });
        six.addEventListener('click', (event) => {
            showElement.innerText += 6;
            l += 6;
        });
        seven.addEventListener('click', (event) => {
            showElement.innerText += 7;
            l += 7;
        });
        eight.addEventListener('click', (event) => {
            showElement.innerText += 8;
            l += 8;
        });
        nine.addEventListener('click', (event) => {
            showElement.innerText += 9;
            l += 9;

        });
        c.addEventListener('click', (event) => {
            showElement.innerText = "";
            l = "";

        });
        OK.addEventListener('click', (event) => {
            showElement.innerText = +"";






            switch (l) {
                case this.showProduct0.id:
                    now = new Date();
                    html = `
                            ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                            `;
                    this.price += +this.showProduct0.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct0.innerText;
                    this.producthistory += html;

                    break;
                case this.showProduct1.id:
                    now = new Date();
                    html = `
                            ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                            `;
                    this.price += +this.showProduct1.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct1.innerText;
                    this.producthistory += html;
                    break;
                case this.showProduct2.id:
                    now = new Date();
                    html = `
                                ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                                `;
                    this.price += +this.showProduct2.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct2.innerText;
                    this.producthistory += html;
                    break;
                case this.showProduct3.id:
                    now = new Date();
                    html = `
                                ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                                `;
                    this.price += +this.showProduct3.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct3.innerText;
                    this.producthistory += html;
                    break;
                case this.showProduct4.id:
                    now = new Date();
                    html = `
                                ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                                `;
                    this.price += +this.showProduct4.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct4.innerText;
                    this.producthistory += html;
                    break;
                case this.showProduct5.id:
                    now = new Date();
                    html = `
                                ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()} || ${now.getDate()} . ${now.getMonth()+1} . ${now.getFullYear()}r.
                                `;
                    this.price += +this.showProduct5.value
                    this.showPrice.innerText = this.price;

                    this.producthistory += this.showProduct5.innerText;
                    this.producthistory += html;
                    break;


                default:
                    alert("Wrong ID")
                    break;


            }
        });
    },
    dodwanie() {

        const baton1 = document.querySelector('.b1');
        const baton2 = document.querySelector('.b2');
        const baton3 = document.querySelector('.b3');
        const baton4 = document.querySelector('.b4');

        baton1.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.half.quantity++;
            this.sum += this.rest.half.value;
            showVar.innerText = this.sum;
        });

        baton2.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.one.quantity++;
            this.sum += this.rest.one.value;
            showVar.innerText = this.sum;
        });

        baton3.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.two.quantity++;
            this.sum += this.rest.two.value;
            showVar.innerText = this.sum;
        });

        baton4.addEventListener('click', (event) => {
            showVar = document.querySelector('.showVar');
            this.rest.five.quantity++;
            this.sum += this.rest.five.value;
            showVar.innerText = this.sum;
        });
    },
    payy() {
        const pay = document.querySelector('.z1');

        pay.addEventListener('click', (event) => {
            this.wydawanie();
            showPrice = document.getElementById('showPrice');
            showVar = document.querySelector('.showVar');
            showPrice.innerText = 0;
            showVar.innerText = 0;
            this.price = 0;

        });
    },

    wydawanie() {
        this.history = document.getElementById('history');

        if (this.sum >= this.price) {
            this.sum -= this.price;

            while (this.sum >= this.rest.five.value) {
                this.sum -= this.rest.five.value;
                this.rest.five.quantity--;
                showRest = document.querySelector('.showRest0');
                showRest.innerText++;


            }
            while (this.sum >= this.rest.two.value) {
                this.sum -= this.rest.two.value;
                this.rest.two.quantity--;
                showRest = document.querySelector('.showRest1');
                showRest.innerText++;

            }
            while (this.sum >= this.rest.one.value) {
                this.sum -= this.rest.one.value;
                this.rest.one.quantity--;
                showRest = document.querySelector('.showRest2');
                showRest.innerText++;

            }
            while (this.sum >= this.rest.half.value) {
                this.sum -= this.rest.half.value;
                this.rest.half.quantity--;
                showRest = document.querySelector('.showRest3');
                showRest.innerText++;

            }
            this.history.insertAdjacentHTML("beforeend", this.producthistory);
            this.producthistory = "";

        } else {


            while (this.sum >= this.rest.five.value) {
                this.sum -= this.rest.five.value;
                this.rest.five.quantity--;
                showRest = document.querySelector('.showRest0');
                showRest.innerText++;
            }
            while (this.sum >= this.rest.two.value) {
                this.sum -= this.rest.two.value;
                this.rest.two.quantity--;
                showRest = document.querySelector('.showRest1');
                showRest.innerText++;
            }
            while (this.sum >= this.rest.one.value) {
                this.sum -= this.rest.one.value;
                this.rest.one.quantity--;
                showRest = document.querySelector('.showRest2');
                showRest.innerText++;
            }
            while (this.sum >= this.rest.half.value) {
                this.sum -= this.rest.half.value;
                this.rest.half.quantity--;
                showRest = document.querySelector('.showRest3');
                showRest.innerText++;
            }
            this.producthistory = "";
        }
    },
    take() {
        batonReset = document.querySelector('.reset');
        batonReset.addEventListener('click', (event) => {
            showRest = document.querySelector('.showRest0');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest1');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest2');
            showRest.innerText = 0;
            showRest = document.querySelector('.showRest3');
            showRest.innerText = 0;
        });
    },
}

automat.produkty();
automat.controlPanel();
automat.dodwanie();
automat.select();
automat.payy();
automat.take();