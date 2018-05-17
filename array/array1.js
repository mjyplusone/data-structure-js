// 创建一个记录学生成绩的对象， 提供一个添加成绩的方法， 以及一个显示学生平均成绩的方法。

function Student () {
    this.add = function (num) {
        this.score.push(num);
    },
    this.average = function () {
        var sum = this.score.reduce((prev, cur) => {
            return prev + cur;
        });
        return sum / this.score.length;
    },
    this.score = [];
}

var student = new Student();
student.add(100);
student.add(90);
student.add(84);
student.add(97);
console.log(student.average());
