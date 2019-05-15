# Some method speed test
### **Number()** vs **operator "+"** vs **parseInt** (*why not?*)
> Array of **1 mil** strings
>Cycles: 20 
> Number---------------: 191.8ms 
> operator"+"----------: 206.2ms 
>parseInt--------------: 234.85ms 
>test duration: 12.658sec

### **Boolean** vs **operator "double not(!!)"**
> Array of **1 mil** strings
>Cycles: 40 
>Boolean-------------: 136.675ms 
>"double not"(!!)----: 145.35ms 
>test duration: 11.282sec
