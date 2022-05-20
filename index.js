class Polygon {
    constructor(arrOfInt){
        this.arrOfInt = arrOfInt
    }
        get countSides(){
           return this.arrOfInt.length 
       } 
       get perimeter(){
            return this.arrOfInt.reduce((accumulator, curr) => accumulator + curr)
       }
    }

class Triangle extends Polygon {
    get isValid(){
        let [a, b, c] = this.arrOfInt

        if((a+b)>c && (a+c)>b && (b+c)>a){
            return true
        }
        else{
            return false
        }
      }
}

class Square extends Polygon {
    get isValid(){
        let [a, b, c ,d] = this.arrOfInt
    
        if(a === b &&  b === c && c === d){
            return true
        }
        else{
            return false
        }
    }

    get area(){
        let [a, b] = this.arrOfInt
        return a * b
    }
}
