'use strict';
let hours = ['','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','total'];

let secsalmonCookies = document.getElementById('salmonCookies');
const tableEl = document.createElement('table');
secsalmonCookies.appendChild(tableEl);

let tr1 = document.createElement('tr');
tableEl.appendChild(tr1);

for (let i = 0; i < hours.length; i++) {

    let th1 = document.createElement('th');
    th1.textContent = hours[i];
    tr1.appendChild(th1);
}
let column= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0] ;

function Salmon(barchName, minCust, maxCust, AvgCookie) {
    this.barchName = barchName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.AvgCookie = AvgCookie;
    this.cookies = 0;
    this.total = 0;
    this.tatalRow=0 ;
}
Salmon.prototype.RandomNumOfCust = function () {
    let min = Math.ceil(this.minCust);
    let max = Math.floor(this.maxCust);
    this.cookies = Math.floor((Math.random() * (max - min + 1) + min) * this.AvgCookie); //The maximum is inclusive and the minimum is inclusive
    this.total += this.cookies
    return this.cookies;
};
Salmon.prototype.render = function () {
    let row_2 = document.createElement('tr');
  tableEl.appendChild(row_2);
    let th_1 = document.createElement('td');
    th_1.textContent = this.barchName;
    row_2.appendChild(th_1);
    for (let i = 1; i < hours.length-1; i++) {
        this.tatalRow=this.RandomNumOfCust();
        column[i]+=this.tatalRow;

        let raw1 = document.createElement('td');
        raw1.textContent = this.tatalRow;
        row_2.appendChild(raw1);
    }
    column[hours.length-1]+=this.total;
    let liElement = document.createElement('td');
    liElement.textContent = this.total;
    row_2.appendChild(liElement);
    
}

function  footer () {
    let row_2 = document.createElement('tr');
    tableEl.appendChild(row_2);
    let th_1 = document.createElement('td');
    th_1.textContent = 'Totals';
    row_2.appendChild(th_1);
    for (let i = 1; i < hours.length ; i++) {
      let td_1 = document.createElement('td');
      td_1.textContent = column[i] ;
      row_2.appendChild(td_1);
    }
  }


let Seattle = new Salmon('Seattle', 23, 65, 6.5);
    let Tokyo = new Salmon ('Tokyo',3,24,1.2);
    let Dubai = new Salmon ('Dubai' ,11,38,3.7);
    let Paris = new Salmon ('Paris',20,38,2.3);
    let Lima = new Salmon ('Lima',2,16,4.6);
    Seattle.render();
    Tokyo.render();
    Dubai.render();
    Paris.render();
    Lima.render();
    footer();

// console.log (Seattle);

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// const Seattle = {
//     barchName : 'Seattle',
//     minCust: 23,
//     maxCust: 65,
//     AvgCookie: 6.5,
//     cookies :0,
//     total :0 ,
//     // RandomNumOfCust : means the avg num of cookies sold/hour 
//     // cookies : avg cookies sold * Random number of customers
//     RandomNumOfCust: function() {
//         let min = Math.ceil(this.minCust);
//         let max = Math.floor(this.maxCust);
//         this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie); //The maximum is inclusive and the minimum is inclusive
//      this.total += this.cookies
//      return this.cookies ;
//     }, 

//     render: function () { 

// let secsalmonCookies = document.getElementById('salmonCookies');
//        let h2Element = document.createElement('h2');
//        h2Element.textContent = this.barchName;
//        secsalmonCookies.appendChild(h2Element);

//     let ulEl = document.createElement('ul');
//         secsalmonCookies.appendChild(ulEl);

//     for(let i = 0; i < hours.length; i++) {
//         let liElement = document.createElement('li');
//       liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
//       ulEl.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
//     ulEl.appendChild(liElement);
//     }

// }
// Seattle.render();

// const Tokyo = {
//     barchName : 'Tokyo',
//     minCust: 3,
//     maxCust: 24,
//     AvgCookie: 1.2,
//     cookies :0,
//     total :0 ,
//     RandomNumOfCust: function() {
//         let min = Math.ceil(this.minCust);
//         let max = Math.floor(this.maxCust);
//         this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
//      this.total += this.cookies
//      return this.cookies ;
//     }, 


//     render: function () { 

// let secsalmonCookies = document.getElementById('salmonCookies');
// let h2Element = document.createElement('h2');
// h2Element.textContent = this.barchName;
// secsalmonCookies.appendChild(h2Element);
//         let ulEl = document.createElement('ul');
//         secsalmonCookies.appendChild(ulEl);

//     for(let i = 0; i < hours.length; i++) {
//         let liElement = document.createElement('li');
//       liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
//       ulEl.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
//     ulEl.appendChild(liElement);
//     }

// }
// Tokyo.render();

// const Dubai = {
//     barchName : 'Dubai',
//     minCust: 3,
//     maxCust: 24,
//     AvgCookie: 1.2,
//     cookies :0,
//     total :0 ,
//     RandomNumOfCust: function() {
//         let min = Math.ceil(this.minCust);
//         let max = Math.floor(this.maxCust);
//         this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
//      this.total += this.cookies
//      return this.cookies ;
//     }, 


//     render: function () { 

// let secsalmonCookies = document.getElementById('salmonCookies');
// let h2Element = document.createElement('h2');
// h2Element.textContent = this.barchName;
// secsalmonCookies.appendChild(h2Element);
//         let ulEl = document.createElement('ul');
//         secsalmonCookies.appendChild(ulEl);

//     for(let i = 0; i < hours.length; i++) {
//         let liElement = document.createElement('li');
//       liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
//       ulEl.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
//     ulEl.appendChild(liElement);
//     }

// }
// Dubai.render();



// const Lima = {
//     barchName : 'Lima',
//     minCust: 3,
//     maxCust: 24,
//     AvgCookie: 1.2,
//     cookies :0,
//     total :0 ,
//     RandomNumOfCust: function() {
//         let min = Math.ceil(this.minCust);
//         let max = Math.floor(this.maxCust);
//         this.cookies = Math.floor((Math.random() * (max - min + 1) + min)*this.AvgCookie);//The maximum is inclusive and the minimum is inclusive
//      this.total += this.cookies
//      return this.cookies ;
//     }, 


//     render: function () { 

// let secsalmonCookies = document.getElementById('salmonCookies');
// let h2Element = document.createElement('h2');
// h2Element.textContent = this.barchName;
// secsalmonCookies.appendChild(h2Element);
//         let ulEl = document.createElement('ul');
//         secsalmonCookies.appendChild(ulEl);

//     for(let i = 0; i < hours.length; i++) {
//         let liElement = document.createElement('li');
//       liElement.textContent = hours[i]+': '+this.RandomNumOfCust() + 'Cookies';
//       ulEl.appendChild(liElement);
//     }
//     let liElement = document.createElement('li');
//     liElement.textContent = 'the sum of these hourly totals Cookies: '+this.total+ 'Cookies';
//     ulEl.appendChild(liElement);
//     }

// }
// Lima.render();