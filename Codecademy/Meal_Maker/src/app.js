let menu = {
    _meal:'',
    _price:0,
    set meal(mealToCheck){
      if(typeof mealToCheck == 'string'){
        return this._meal = mealToCheck;
      }
    },
    set price(priceToCheck){
      if(typeof priceToCheck == 'number'){
        return this._price = priceToCheck;
      }
    },
    get todaysSpecial(){
      if(this._meal && this._price){
        return `Today's Special is ${this._meal} for \$${this._price}!`;
      }else{
        return "Meal or price was not set correctly!";
      }
    }
  };
  menu.meal = "Beef Steak";
  menu.price = 15;
  console.log(menu);
  /*
  {
    _meal: 'Beef Steak',
    _price: 15,
    meal: [Setter],
    price: [Setter],
    todaysSpecial: [Getter]
  }
   */
  console.log(menu.todaysSpecial);
  //Today's Special is Beef Steak for $15!