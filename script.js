class ArrayList {
    constructor(a) {
      a = [];
      this.array = a;
      
    }
   
    push(pushedVal) {
        console.log(this.array)
        return this.array.push(pushedVal);
    }
    
    unshift(pushedVal) {
        return this.array.unshift(pushedVal);
    }
    pop() {
        return this.array.pop();
    }
    shift() {
        return this.array.shift();
    }
    map(callback){
        return this.array.map(callback);
    }
    filter(callback){
        return this.array.filter(callback);
    }
    clear(){
        return this.array = [];
    }
    reduce(reduceItems, aggregate){
        return this.array.reduce(reduceItems, aggregate);
    }
    concat(secondArray){
        return this.array.concat(secondArray)
    }
    find(callback){
        return this.array.find(callback);
    }
  }
   
 let a = new ArrayList();
 a.push("me")
 a.push("mee")
 a.pop()
 
 