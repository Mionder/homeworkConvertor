import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

var vm = new Vue({
    el: '#main',
    data:{
        item: "",
        bankVal: [],
        convTo: "",
        amountOfUAH:"",
        amountOfDol:"",
        convFrom:"",
        courseBuy: "",
        courseSale: ""
    },
    mounted: function(){
        Vue.axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((elem)=>{
            this.bankVal = elem.data;
                
            console.log(this.bankVal);
        })
    },
    computed: {
        result: function(){
            // this.convFrom = this.convFrom * 20 this.bankVal.buy; 
            //console.log(this.convFrom);
            
        }   
    },
    methods: {
        changeThis: function(){
            
        },
        result1: function(){
            Vue.axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((elem)=>{
            for(let i=0; i<elem.data.length;i++){
                // alert(this.convTo);
                // alert(elem.data[i].ccy);
                if(this.convTo == elem.data[i].ccy){
                    this.courseBuy = elem.data[i].buy;
                    this.courseSale = elem.data[i].sale;
                }
            }
        
        console.log(this.courseBuy);
        console.log(this.courseSale);
            })
            if(this.courseBuy < 1){
                return (this.amountOfDol.toFixed(2)) = parseFloat(this.amountOfUAH)*parseFloat(this.courseBuy);
            }
            else return (this.amountOfDol.toFixed(2)) = parseFloat(this.amountOfUAH)/parseFloat(this.courseBuy);
            
        },
        result2: function(){
            Vue.axios.get("https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5").then((elem)=>{
            for(let i=0; i<elem.data.length;i++){
                 //alert(this.convTo);
                // alert(elem.data[i].ccy);
                if(this.convTo == elem.data[i].ccy){
                    this.courseBuy = elem.data[i].buy;
                    this.courseSale = elem.data[i].sale;
                }
            }
        
        console.log(this.courseBuy);
        console.log(this.courseSale);
            })
            if(this.courseSale > 1){
                return this.amountOfUAH.toFixed(2) = this.amountOfDol*this.courseSale;
            }
            else return this.amountOfUAH.toFixed(2) = this.amountOfDol/this.courseSale;
            
            
        }
    }

})