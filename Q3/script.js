function counterMaker() {
    count=0;
    return function(addNumber=0){
        count+=addNumber;
        return count;
    }
}

const counter=counterMaker();
console.log(counter());
console.log(counter(1));
console.log(counter(3));
console.log(counter());
console.log(counter(7));