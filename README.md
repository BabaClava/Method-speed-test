# Speed test of some methods
## Usage:
***
### Comand line
```
node testName [cycles]
cycles: <int>, default = 10
```
## Result:
***
### **Number()** vs **operator "+"** vs **parseInt** (*why not?*)
>Array of **1 mil** strings <br>
>Cycles: 20 <br>
>Number--------------: 191.8ms <br>
>operator"+"----------: 206.2ms <br>
>parseInt--------------: 234.85ms <br>
>test duration: 12.658sec

### **Boolean** vs **operator "double not(!!)"**
>Array of **1 mil** strings <br>
>Cycles: 40 <br>
>Boolean------------: 136.675ms <br>
>"double not"(!!)----: 145.35ms <br>
>test duration: 11.282sec <br>
