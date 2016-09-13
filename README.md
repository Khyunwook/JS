# JS
JavaScript Blog

##Observable : 
Observable gives us another and much more powerful way of thinking of events, because it gives us an object by which to represent that event stream, and using that object, we can call methods like map, filter, and concatAll


##Remove item in array
```javascript
removeItem(item): void{
    let index = this.items.indexOf(item);

    if(index>-1){
      this.items.splice(index,1);
    }
  }
```
