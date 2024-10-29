class HashMap {
  constructor() {
    this.bucket = new Array(16).fill(null);
  }
  hash(key) {
    let hashCode = 0;

    let primerNumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashCode = primerNumber * hashCode + key.charCodeAt(i);
    }

    return hashCode;
  }

  set(key, value) {
    const hash = this.hash(key);

    if (!this.bucket[hash]) {
      this.bucket[hash] = [];
    }

    for (let i = 0; i < this.bucket[hash].length; i++) {
      if (this.bucket[hash].key === key) {
        this.bucket[hash].value = value;
        return;
      }
    }

    this.bucket[hash].push({ key, value });

 //  this.loadFactor()
  }

  get(key) {
    const hash = hash(key);

    for (let i = 0; i < this.bucket[hash].length; i++) {
      if (key === this.bucket[hash][i].key) {
        return this.bucket[hash][i].value;
      }
    }

    return null;
  }

  has(key) {
    const hash = hash(key);

    for (let i = 0; i < this.bucket[hash].length; i++) {
      if (key === this.bucket[hash][i].key) {
        return true;
      }
    }

    return false;
  }

  remove() {
    const hash = hash(key);

    for (let i = 0; i < this.bucket[hash].length; i++) {
      if (key === this.bucket[hash][i].key) {
        this.bucket[hash].splice[(i, 0)];
        return true;
      }
    }

    return false;
  }

  length(){
    return this.bucket.length
  }

  clear(){
    this.bucket.fill(null)
  }
  keys(){
    let keys = []

    this.bucket.forEach((bucket) => {
        if (bucket){
            bucket.forEach(key => {
                keys.push(key.key)
            });
    }
    })

    return keys
  }

  values(){
    let values = []

    this.bucket.forEach((bucket) => {
        if (bucket){
            bucket.forEach(value => {
                values.push(value.value)
            });
    }
    })

    return values
  }

  entries(){
    let entries = []

    this.bucket.forEach((bucket) => {
        if (bucket){
            bucket.forEach(entrie => {
                entries.push([entrie.key, entrie.value])
            });
    }
    })

    return entries
  }

  loadFactor(){
    const loadCheck = this.bucket.length / this.length()

    if(loadCheck > 0.75){
        const oldBucket = this.bucket.slice()
        
        this.bucket.length = this.bucket.length * 2
        this.bucket.fill(null)

        oldBucket.forEach(newBucket => {
            if(newBucket){
                newBucket.forEach(entry => {
                    this.set(entry.key, entry.value)
                })
            }
        })
    }
  }
}

let hashmap = new HashMap()

hashmap.set('apple', 'red')
hashmap.set('banana', 'yellow')
hashmap.set('carrot', 'orange')
hashmap.set('dog', 'brown')
hashmap.set('elephant', 'gray')
hashmap.set('frog', 'green')
hashmap.set('grape', 'purple')
hashmap.set('hat', 'black')
hashmap.set('ice cream', 'white')
hashmap.set('jacket', 'blue')
hashmap.set('kite', 'pink')
hashmap.set('lion', 'golden')

console.log(hashmap.keys())
