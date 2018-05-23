function knapsack(value, weights, capacity) {
    var load = 0;
    var i = 0; 
    var all = 0;
    while (load < capacity && i < 4) {
        if (weights[i] <= (capacity - load)) {
            all += values[i];
            load += weights[i];
        } else {
            var r = (capacity - load) / weights[i];
            all += r * values[i];
            load += weights[i];
        }
        i++;
    }
    return all;
}

var items = ['A', 'B', 'C', 'D'];
var values = [50, 140, 60, 60];
var weights = [5, 20, 10, 12];
var capacity = 30;
print(knapsack(values, weights, capacity));