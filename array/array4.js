// 创建这样一个对象， 它将字母存储在一个数组中， 并且用一个方法可以将字母连在一起， 显示成一个单词。

function letter () {
    this.data = [];
    this.add = function (letter) {
        this.data.push(letter);
    }
    this.concat = function() {
        return this.data.join('');
    }
}

var obj = new letter();
obj.add('a');
obj.add('p');
obj.add('p');
obj.add('l');
obj.add('e');
console.log(obj.concat()); 