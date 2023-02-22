const a = tf.tensor([1, 2, 3, 4, 5, 6]);
a.print(true);

//clone data
const b = tf.clone(a);
b.print(true);

const c = tf.tensor([0, 0, 0, 0, 0]);
c.print(true);

// 1superduperpowergrup , 1superpowergrup, 1supergrup, 2grup, 2baris, 1kolom = 1*2*2*2*1 = 8 total data

console.log('\nzeros');
tf.zeros([2, 5]).print(true);

console.log('\nones');
tf.ones([2, 5]).print(true);

console.log('\nfill');
tf.fill([2, 5], 2).print(true);

console.log('\neye-diagonal');
tf.eye(5).print(true);
/*
[
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1]
    ]
*/

console.log('\nlinspace');
//dari 1 sampai 10 , hanya 5 angka
tf.linspace(1, 10, 5).print(true);
//[1, 3.25, 5.5, 7.75, 10]

console.log('\nrange');
tf.range(0, 11, 4).print(true);
//[0, 4, 8]

//1 - 2 3 4 5 6 7 8 9 10 11 - 12     kelipatan 3
tf.range(1, 12, 3).print(true);
//[1, 4, 7, 10]

console.log('\nzerosLike');
tf.zerosLike(a).print(true);

const e = tf.tensor([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
e.print();
tf.zerosLike(e).print(true);


console.log('\n\noperational');
const _a = tf.tensor([1, 2, 3, 4, 5]);
const _b = tf.tensor([6, 7, 8, 9, 10]);
const _c = tf.tensor([10]);
_a.print();
_b.print();
_c.print();

console.log('\nAdd');
const add = tf.add(_a, _b);
add.print();
const addv2 = _a.add(_b);
addv2.print();
const addv3 = tf.add(_a, _c);
addv3.print();

console.log('\nSub');
const sub = tf.sub(_a, _b);
sub.print();
const subv2 = _a.sub(_b);
subv2.print();
const subv3 = _a.sub(_c);
subv3.print();

console.log('\nmul');
const mul = tf.mul(_a, _b);
mul.print();
const mulv2 = tf.mul(_a, _c);
mulv2.print();

console.log('\ndiv');
const div = tf.div(_a, _b);
div.print();
const divv2 = tf.div(_a, _c);
div.print();

console.log('\nmod');
const mod = tf.mod(_b, _a);
mod.print();

console.log('\nfloor div');
const floorDiv = tf.floorDiv(_b, _a);
floorDiv.print();

console.log('\nMax ');
const max = tf.maximum(_a, _b);
max.print();

console.log('\nMin');
const min = tf.minimum(_a, _b);
min.print();


console.log('\n\nSlicing');

const _av2 = tf.tensor([1, 2, 3, 4, 5]);
const _bv2 = tf.tensor([6, 7, 8, 9, 10]);
const _cv2 = tf.tensor([10]);
_av2.print();
_bv2.print();
_cv2.print();

console.log('\nGather');
const index = tf.tensor1d([1, 2, 4], 'int32');
const dataByIndex = tf.gather(_av2, index);
dataByIndex.print();

console.log('\nconcat');
const concatv1 = tf.concat([_av2, _bv2, _cv2]);
// tf.concat();
// tf.concat1d();
// tf.concat2d();
// tf.concat3d();
// tf.concat4d();
// tf.concat5d();
// tf.concat6d();
concatv1.print();
const concatv2 = _av2.concat(_bv2).concat(_cv2);
concatv2.print();

console.log('\nreverse');
tf.reverse(_av2).print();

const _dv2 = tf.tensor([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]);
_dv2.print();
tf.reverse(_dv2).print();

console.log('\ntranspose');
tf.transpose(_dv2).print();

console.log('\nequal');
tf.equal(_av2, _bv2).print();
tf.equal(_bv2, _cv2).print();

console.log('\ngreater');
tf.greater(_av2, _bv2).print();
tf.greater(_cv2, _bv2).print();
