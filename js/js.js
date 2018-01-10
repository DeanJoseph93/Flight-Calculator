/**
 * @name:   js.js
 * @desc:   Flight / Luggage Selector
 */



(function () {
    
    var

        noCountry               =   document.getElementById("noCountry"),
        england                 =   document.getElementById("england"),
        spain                   =   document.getElementById("spain"),
        germany                 =   document.getElementById("germany"),
        images                  =   document.getElementById("images"),
        imageCountry            =   document.getElementById("imageCountry"),
        flightPrice             =   document.getElementById("flightPrice"),
        noLuggage               =   document.getElementById("noLuggage"),
        twentyKilo              =   document.getElementById("twentyKilo"),
        thirtyKilo              =   document.getElementById("thirtyKilo"),
        fortyKilo               =   document.getElementById("fortyKilo"),
        luggagePrice            =   document.getElementById("luggagePrice"),
        totalPrice              =   document.getElementById("totalPrice"),
        bookingPrice            =   document.getElementById("bookingPrice"),
        bookingFee              =   25,
        imageIndex              =   0,
        imageArray              =   ["images/black_background.png", "images/buckingham-palace.jpeg", "images/spain.jpeg", "images/germany.jpeg", "images/world-map_edit.jpg"],
        countries               =   [
                                        {id:"noCountry", value:0, price:0},
                                        {id:"england", value: 350, price: 350},
                                        {id:"spain", value: 300, price: 300},
                                        {id:"germany", value: 270, price: 270}
                                    ],
        luggage                 =   [
                                        {id:"noLuggage", value:0, price:0},
                                        {id:"twentyKilo", value: 20, price: 20},
                                        {id:"thirtyKilo", value: 30, price: 30},
                                        {id:"fortyKilo", value: 40, price: 40}
                                     ],


        totalFee                =   0,
        imagePlane              =   document.getElementById("imagePlane"),
        marginLeft              =   0,




        /**
         * @name:   flyRight
         * @desc:   will manipulate image and give it a marginleft
         */

        flyRight        =   function () {
            if (marginLeft < 1105) {

                marginLeft += 3;
                imagePlane.style.marginLeft = marginLeft + "px";

                setTimeout(
                    function(){
                        flyRight();
                    },
                    50
                );
            } else {
                imagePlane.src =  "images/plane_edit_left.png";
                flyLeft();
            } //if
        }, //flyRight


        /**
         * @name:   flyLeft
         * @desc:   will manipulate image and give it a marginleft
         */

        flyLeft        =   function () {
            if (marginLeft > 0) {

                marginLeft -= 3;
                imagePlane.style.marginLeft = marginLeft + "px";

                setTimeout(
                    function(){
                        flyLeft();
                    },
                    50
                );
            } else {
                imagePlane.src =  "images/plane_edit.png";
                flyRight();

            } //if
        }, //flyRight




        /**
         * @name:   resetChoice
         * @desc:   every time a radio button is clicked (luggage) the luggage resets to no luggage
         */


        resetChoice     =    function () {


            noLuggage.checked           = true;
            luggagePrice.innerHTML      = "No Fee";
            flightPrice.innerHTML       = "No Destination";
            totalPrice.innerHTML        = "";
        }, //resetChoice

        

        /**
         * @name:   resetLuggage
         * @desc:   every time a radio button is clicked the total price (luggage)resets to ""
         */

        resetLuggage     =    function () {

            if (noCountry.checked == true){
                bookingPrice.innerHTML      = "No Fee";
                luggagePrice.innerHTML      = "Select Flight";
                flightPrice.innerHTML       = "No Flight Selected";
                totalPrice.innerHTML        = "";
            }

        }, //resetChoice




        /**
         * @name:   bindRadioBtns
         * @desc:   subscribing handlers to radioButtons
         */

        bindRadioBtns   =   function () {
            
            
            noCountry.addEventListener("click", function () {



                imageCountry.src         =   imageArray[4];
                luggagePrice.innerHTML   = "No Fee";
                bookingPrice.innerHTML   = "No Fee";
                flightPrice.innerHTML    = "No Flight Selected";
                totalPrice.innerHTML     = "";

                resetChoice();
                resetLuggage();
            }); //noCountry




            england.addEventListener("click", function () {

                resetChoice();

                totalPrice.innerHTML     = "";
                imageCountry.src         =  imageArray[1];
                luggagePrice.innerHTML   = "No Fee";
                bookingPrice.innerHTML   = "£" + bookingFee;
                priceFlight              =  parseInt(countries[1].value);
                flightPrice.innerHTML    = "£" + priceFlight;
                totalPrice.innerHTML     = "£" + (priceFlight + bookingFee);



            }); //england 




            spain.addEventListener("click", function () {

                resetChoice();

                imageCountry.src         =   imageArray[2];
                bookingPrice.innerHTML   = "£" + bookingFee;
                luggagePrice.innerHTML   = "No Fee";
                priceFlight              =   parseInt(countries[2].value);
                flightPrice.innerHTML    = "£" + priceFlight;
                totalPrice.innerHTML     = "£" + (priceFlight + bookingFee);


            }); //spain



            germany.addEventListener("click", function () {

                resetChoice();

                imageCountry.src         =   imageArray[3];
                bookingPrice.innerHTML   = "£" + bookingFee;
                luggagePrice.innerHTML      = "No Fee";
                priceFlight              =   parseInt(countries[3].value);
                flightPrice.innerHTML    = "£" + priceFlight;
                totalPrice.innerHTML     = "£" + (priceFlight + bookingFee);

            }); //germany


            noLuggage.addEventListener("click", function () {

                luggagePrice.innerHTML    =  "No Luggage";
                totalPrice.innerHTML      =  "£" + (priceFlight + bookingFee);

                resetLuggage();
            }); //twentyKilo


            twentyKilo.addEventListener("click", function () {

                priceLuggage              =   parseInt(twentyKilo.value);
                luggagePrice.innerHTML    =  "£" + priceLuggage;
                totalPrice.innerHTML      =  "£" + (priceFlight + priceLuggage + bookingFee);

                resetLuggage();
            }); //twentyKilo


            thirtyKilo.addEventListener("click", function () {

                priceLuggage              =   parseInt(thirtyKilo.value);
                luggagePrice.innerHTML    =  "£" + priceLuggage;
                totalPrice.innerHTML      =  "£" + (priceFlight + priceLuggage + bookingFee);

                resetLuggage();
            }); //thirtyKilo


            fortyKilo.addEventListener("click", function () {

                priceLuggage              =   parseInt(fortyKilo.value);
                luggagePrice.innerHTML    =  "£" + priceLuggage;
                totalPrice.innerHTML      =  "£" + (priceFlight + priceLuggage + bookingFee);

                resetLuggage();
            }); //fortyKilo






        }, //bindRadioBtns


        


    
    init    = function () {
        bindRadioBtns();
        flyRight();

    } //init
    
    
    ;
    
 window.addEventListener("load", init);
    
    
})();