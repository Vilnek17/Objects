const car = {
    model:'Tesla',
    year:2018,
    color:'black',
    signal: function(){
        alert("fa! fa!");
    },
}
car.color='yellow';
car.type='electric';


let salaries = { frontend: 12000,
     backend:10000, 
     designer:8000, 
     dayPay() { alert('We must pay salary on Tuesday!') },

total: function() {
     let sum = 0; 
     for (let prop in this) {
         if (typeof this[prop] === 'number') { 
            sum += this[prop]; 
        } 
    } return sum; 
} 
}

salaries.total();


function Computer(brand,system,cost){
    this.brand=brand;
    this.system=system;
    this.cost=cost;
    this[Symbol.toPrimitive]=function(hint){
        switch(hint){
            case 'string':
                return this.brand
            case 'number':
                return this.cost
            case 'default':
                return this.brand+ ' '+this.system + ' ' + this.cost + ' ';
        }
    }
}

let dell=new Computer('Dell','windows','800');
let apple=new Computer('Apple','MAC OS','1700');


