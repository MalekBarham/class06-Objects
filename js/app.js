'use strict';

let hours =  ['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];


let main=document.getElementById('demo');


let  seattleCookies =  { 
    Location : 'Seattle',
    min : 23,
    max : 65,	
    avgCookiesSales  : 6.3,  
    hourlySales : [],
    dailySales : 0,
    randomCust  : function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    },
    hourlyDailySales : function () {
        for ( let i =0 ; i < hours.length ; i ++ )  {
                let numofCookies =  Math.ceil(this.randomCust() * this.avgCookiesSales);
                  console.log(numofCookies);
                 this.hourlySales.push(numofCookies);
           this.dailySales+= numofCookies
        }
    },
    render : function (){
    this.hourlyDailySales()

    let unorderedList=document.createElement('ul');
    let name =document.createElement('h1')
    name.innerText=this.Location
    unorderedList.appendChild(name);
        for ( let i =0 ; i < hours.length ; i ++ )  {
            let type=document.createElement('li');
            type.innerText=hours[i]+ ' : ' + this.hourlySales[i] + ' cookies '  
            unorderedList.appendChild(type);
            main.appendChild(unorderedList)
           
    }
    let totalofCookies=document.createElement('li')
    unorderedList.appendChild(totalofCookies)
    totalofCookies.innerText= ' totall : ' + this.dailySales + 'Cookies'
    }
    }
    seattleCookies.render();
    console.log(seattleCookies.hourlyDailySales());





    let  tokyoCookies =  { 
        Location : 'tokyo',
        min : 3,
        max : 24,	
        avgCookiesSales  : 1.2,  
        hourlySales : [],
        dailySales : 0,
        randomCust  : function () {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        },
        hourlyDailySales : function () {
            for ( let i =0 ; i < hours.length ; i ++ )  {
                    let numofCookies =  Math.ceil(this.randomCust() * this.avgCookiesSales);
                      console.log(numofCookies);
                     this.hourlySales.push(numofCookies);
               this.dailySales+= numofCookies
            }
        },
        render : function (){
        this.hourlyDailySales()
    
        let unorderedList=document.createElement('ul');
        let name =document.createElement('h1')
        name.innerText=this.Location
        unorderedList.appendChild(name);
            for ( let i =0 ; i < hours.length ; i ++ )  {
                let type=document.createElement('li');
                type.innerText=hours[i]+ ' : ' + this.hourlySales[i] + ' cookies '  
                unorderedList.appendChild(type);
                main.appendChild(unorderedList)
               
        }
        let totalofCookies=document.createElement('li')
        unorderedList.appendChild(totalofCookies)
        totalofCookies.innerText= ' totall : ' + this.dailySales + 'Cookies'
        }
        }
        tokyoCookies.render();
        console.log(tokyoCookies.hourlyDailySales());

        let  dubaiCookies =  { 
            Location : 'Dubai',
            min : 11,
            max : 38,	
            avgCookiesSales  : 3.7,  
            hourlySales : [],
            dailySales : 0,
            randomCust  : function () {
            return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
            },
            hourlyDailySales : function () {
                for ( let i =0 ; i < hours.length ; i ++ )  {
                        let numofCookies =  Math.ceil(this.randomCust() * this.avgCookiesSales);
                          console.log(numofCookies);
                         this.hourlySales.push(numofCookies);
                   this.dailySales+= numofCookies
                }
            },
            render : function (){
            this.hourlyDailySales()
        
            let unorderedList=document.createElement('ul');
            let name =document.createElement('h1')
            name.innerText=this.Location
            unorderedList.appendChild(name);
                for ( let i =0 ; i < hours.length ; i ++ )  {
                    let type=document.createElement('li');
                    type.innerText=hours[i]+ ' : ' + this.hourlySales[i] + ' cookies '  
                    unorderedList.appendChild(type);
                    main.appendChild(unorderedList)
                   
            }
            let totalofCookies=document.createElement('li')
            unorderedList.appendChild(totalofCookies)
            totalofCookies.innerText= ' totall : ' + this.dailySales + 'Cookies'
            }
            }
            dubaiCookies.render();
            console.log(dubaiCookies.hourlyDailySales());
    

            let  parisCookies =  { 
                Location : 'paris',
                min : 20,
                max : 38,	
                avgCookiesSales  : 2.3,  
                hourlySales : [],
                dailySales : 0,
                randomCust  : function () {
                return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
                },
                hourlyDailySales : function () {
                    for ( let i =0 ; i < hours.length ; i ++ )  {
                            let numofCookies =  Math.ceil(this.randomCust() * this.avgCookiesSales);
                              console.log(numofCookies);
                             this.hourlySales.push(numofCookies);
                       this.dailySales+= numofCookies
                    }
                },
                render : function (){
                this.hourlyDailySales()
            
                let unorderedList=document.createElement('ul');
                let name =document.createElement('h1')
                name.innerText=this.Location
                unorderedList.appendChild(name);
                    for ( let i =0 ; i < hours.length ; i ++ )  {
                        let type=document.createElement('li');
                        type.innerText=hours[i]+ ' : ' + this.hourlySales[i] + ' cookies '  
                        unorderedList.appendChild(type);
                        main.appendChild(unorderedList)
                       
                }
                let totalofCookies=document.createElement('li')
                unorderedList.appendChild(totalofCookies)
                totalofCookies.innerText= ' totall : ' + this.dailySales + 'Cookies'
                }
                }
                parisCookies.render();
                console.log(parisCookies.hourlyDailySales());

                let  limaCookies =  { 
                    Location : 'Lima',
                    min : 2,
                    max : 16,	
                    avgCookiesSales  : 4.6,  
                    hourlySales : [],
                    dailySales : 0,
                    randomCust  : function () {
                    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
                    },
                    hourlyDailySales : function () {
                        for ( let i =0 ; i < hours.length ; i ++ )  {
                                let numofCookies =  Math.ceil(this.randomCust() * this.avgCookiesSales);
                                  console.log(numofCookies);
                                 this.hourlySales.push(numofCookies);
                           this.dailySales+= numofCookies
                        }
                    },
                    render : function (){
                    this.hourlyDailySales()
                
                    let unorderedList=document.createElement('ul');
                    let name =document.createElement('h1')
                    name.innerText=this.Location
                    unorderedList.appendChild(name);
                        for ( let i =0 ; i < hours.length ; i ++ )  {
                            let type=document.createElement('li');
                            type.innerText=hours[i]+ ' : ' + this.hourlySales[i] + ' cookies '  
                            unorderedList.appendChild(type);
                            main.appendChild(unorderedList)
                           
                    }
                    let totalofCookies=document.createElement('li')
                    unorderedList.appendChild(totalofCookies)
                    totalofCookies.innerText= ' totall : ' + this.dailySales + 'Cookies'
                    }
                    }
                    limaCookies.render();
                    console.log(limaCookies.hourlyDailySales());