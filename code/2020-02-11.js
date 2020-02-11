// const report = {
//     sum: 0,
//     count: 0,
//     add: function() {
//         const args = Array.prototype.slice.call(arguments);
//         args.forEach(entry => {
//             this.sum += entry;
//             ++this.count;
//         }, this);
//     },
//     average: function() {
//         return this.sum / this.count;
//     }
// };
//
// report.add(60, 85, 95);
// console.log(report.sum, report.count, report.average())



let count = 0;
const cbFunc = function () {
    console.log(count);
    if (++count > 4) clearInterval(timer);
};
const timer = setInterval(cbFunc, 300);

