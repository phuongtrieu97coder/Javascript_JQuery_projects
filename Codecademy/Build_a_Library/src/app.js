class Media {
    constructor(title,isCheckedOut,ratings){
      this._title = title;
      this._isCheckedOut = isCheckedOut;
      this._ratings = ratings;
    }
  
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
     get ratings(){
      return this._ratings;
    }
  
    toggleCheckOutStatus(){
      if(this._isCheckedOut == true){
        this._isCheckedOut = false;
      }else{
        this._isCheckedOut = true;
      }
    }
  
    getAverageRating(){
      return this._ratings.reduce((accumulator,currenElement,currentIndex,currentArray)=>{
         return accumulator/this._ratings.length;
      },0);
    }
    
    addRating(rate){
      this._ratings.push(rate);
    }
  }
  class Book extends Media {
    constructor(author,title,pages,isCheckedOut,ratings){
      super(title,isCheckedOut,ratings)
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
   
  }
  class Movie extends Media {
    constructor(director,title,runTime,isCheckedOut,ratings){
      super(title,isCheckedOut,ratings)
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime = runTime;
    }
    
  }
  class CD extends Media {
    constructor(artist,title,isCheckedOut,ratings,songs){
      super(title,isCheckedOut,ratings)
      this._artist = artist;
      this._songs = songs;
    }
    
    get artist(){
      return this._artist;
    }
  
    get songs(){
      return this._songs = songs;
    }
  }
  
  const historyOfEverything = new Book("Bill Bryson","A Short History of Nearly Everything", 544, false, []);
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything._isCheckedOut);//true
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());//0
  const speed = new Movie("Jan de Bont","Speed",116,false, []);
  speed.toggleCheckOutStatus();
  console.log(speed._isCheckedOut);//true
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());//0
  