'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const Seattle = {
    barchName : 'Seattle',
    minCust: 23,
    maxCust: 65,
    AvgCookie: 6.5,
    cookies :0,
    total :0 ,
    RandomNumOfCust: function() {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie); //The maximum is inclusive and the minimum is inclusive
     this.total += this.cookies
     return this.cookies ;
    }, 
    
    render: function () { 
    
let secsalmonCookies = document.getElementById('salmonCookies');
       let h2Element = document.createElement('h2');
       h2Element.textContent = this.barchName;
       secsalmonCookies.appendChild(h2Element);

    let ulEl = document.createElement('ul');
        secsalmonCookies.appendChild(ulEl);

    for(let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
      liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
      ulEl.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
    ulEl.appendChild(liElement);
    }
    
}
Seattle.render();

const Tokyo = {
    barchName : 'Tokyo',
    minCust: 3,
    maxCust: 24,
    AvgCookie: 1.2,
    cookies :0,
    total :0 ,
    RandomNumOfCust: function() {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
     this.total += this.cookies
     return this.cookies ;
    }, 
    

    render: function () { 
    
let secsalmonCookies = document.getElementById('salmonCookies');
let h2Element = document.createElement('h2');
h2Element.textContent = this.barchName;
secsalmonCookies.appendChild(h2Element);
        let ulEl = document.createElement('ul');
        secsalmonCookies.appendChild(ulEl);

    for(let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
      liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
      ulEl.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
    ulEl.appendChild(liElement);
    }
    
}
Tokyo.render();

const Dubai = {
    barchName : 'Dubai',
    minCust: 3,
    maxCust: 24,
    AvgCookie: 1.2,
    cookies :0,
    total :0 ,
    RandomNumOfCust: function() {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
     this.total += this.cookies
     return this.cookies ;
    }, 
    

    render: function () { 
    
let secsalmonCookies = document.getElementById('salmonCookies');
let h2Element = document.createElement('h2');
h2Element.textContent = this.barchName;
secsalmonCookies.appendChild(h2Element);
        let ulEl = document.createElement('ul');
        secsalmonCookies.appendChild(ulEl);

    for(let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
      liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
      ulEl.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
    ulEl.appendChild(liElement);
    }
    
}
Dubai.render();



const Lima = {
    barchName : 'Lima',
    minCust: 3,
    maxCust: 24,
    AvgCookie: 1.2,
    cookies :0,
    total :0 ,
    RandomNumOfCust: function() {
        let min = Math.ceil(this.minCust);
        let max = Math.floor(this.maxCust);
        this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
     this.total += this.cookies
     return this.cookies ;
    }, 
    

    render: function () { 
    
let secsalmonCookies = document.getElementById('salmonCookies');
let h2Element = document.createElement('h2');
h2Element.textContent = this.barchName;
secsalmonCookies.appendChild(h2Element);
        let ulEl = document.createElement('ul');
        secsalmonCookies.appendChild(ulEl);

    for(let i = 0; i < hours.length; i++) {
        let liElement = document.createElement('li');
      liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
      ulEl.appendChild(liElement);
    }
    let liElement = document.createElement('li');
    liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
    ulEl.appendChild(liElement);
    }
    
}
Lima.render();