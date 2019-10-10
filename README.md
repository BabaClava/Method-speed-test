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
>Number--------------: 41.65ms <br>
>parseInt--------------: 19.2ms <br>
>operator"+"----------: 25.45ms <br>
>test duration: 1729.252ms

### **Boolean** vs **operator "double not(!!)"**
>Array of **1 mil** strings <br>
>Cycles: 40 <br>
>Boolean------------: 20.675ms <br>
>"double not"(!!)----: 21.95ms <br>
>test duration: 1711.335ms <br>
