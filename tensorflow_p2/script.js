console.log(tf.version);



console.log('----------SCALAR--------dimensi 0');
tf.scalar(3.14).print();


console.log('----------TENSOR 1D--------dimensi 1');
const tensor1d = tf.tensor1d([1, 2, 3, 4], 'int32');  //default float32

tensor1d.print();
console.log(tensor1d);

console.log('----------TENSOR 2D--------dimensi 2');

tf.tensor([[1, 2], [3, 4]]).print();

//kebawah kesamping
//2baris3kolom
tf.tensor([1, 2, 3, 4, 5, 6], [2,3]).print();
//3baris3kolom
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3]).print();

console.log('----------TENSOR 3D--------dimensi 3');
tf.tensor3d([[[1], [2]], [[3], [4]]]).print();

//2grup2baris1kolom = 2*2*1 = 4 total data
tf.tensor3d([1, 2, 3, 4], [2, 2, 1]).print();
/*
[1],
[2]

[3],
[4]
*/

/*
[
 [
  [1],  baris 1 colom 1
  [2]   baris 2 colom 1
 ],     grup 1
 [
  [3],  baris 1 colom 1
  [4]   baris 2 colom 1
 ]      grup 2
]
*/

//1grup2baris2kolom = 1*2*2 = 4 total data
tf.tensor3d([1, 2, 3, 4], [1, 2, 2]).print();
/*
[
    [
        [1, 2], baris 1 colom 1, baris 1 colom 2
        [3, 4] baris 2 colom 1, baris 2 colom 2
    ]
]
*/

//2grup2baris2kolom = 2*2*2 = 8 total data
tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]).print();

tf.tensor3d([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], [2, 4, 2]).print();
/*
[
    [
        [1 , 2 ],
        [3 , 4 ],
        [5 , 6 ],
        [7 , 8 ]
    ],
    [
        [9 , 10],
        [11, 12],
        [13, 14],
        [15, 16]
    ]
]
*/

console.log('----------TENSOR 3D--------dimensi 4');
tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print();

//1supergrup2grup2baris1kolom = 1*2*2*1 = 4 total data
tf.tensor4d([1, 2, 3, 4], [1, 2, 2, 1]).print();
/*
[
    [ //super grup 1
        [ //grup 1
            [1], //baris 1 colomn 1
            [2]  //baris 2 colomn 1
        ],
        [ //grup 2
            [3], //baris 1 colomn 1
            [4]  //baris 2 colomn 1
        ]
    ]
]
*/
//1supergrup2grup2baris1kolom = 2*2*2*1 = 8 total data
tf.tensor4d([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2, 1]).print();
/*
[
    [
        [
            [1],
            [2]
        ],
        [
            [3],
            [4]
        ]
    ],
    [
        [
            [5],
            [6]
        ],
        [
            [7],
            [8]
        ]
    ]
]
*/

console.log('----------TENSOR 3D--------dimensi 5');

//1superpowergrup1supergrup2grup2baris1kolom = 2*2*2*1 = 8 total data
tf.tensor5d([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 2, 2, 1]).print();


console.log('----------TENSOR 3D--------dimensi 6');
//1superduperpowergrup1superpowergrup1supergrup2grup2baris1kolom = 1*2*2*2*1 = 8 total data

tf.tensor6d([1, 2, 3, 4, 5, 6, 7, 8], [1, 1, 2, 2, 2, 1]).print();


console.log('----------TENSOR--------');
tf.tensor([1, 2, 3]).print(); //1
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [4, 2]).print(); // 2
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2]).print(); //3
tf.tensor([1, 2, 3, 4, 5, 6, 7, 8], [2, 2, 2, 1]).print(); //4


tf.tensor1d([1, 2, 3]).print(); //start with [  1
tf.tensor2d([[1, 2], [3, 4]]).print(); //start with [[  2
tf.tensor3d([[[1], [2]], [[3], [4]]]).print(); //start with [[[  3
tf.tensor4d([[[[1], [2]], [[3], [4]]]]).print(); //start with [[[[  4
tf.tensor5d([[[[[1], [2]], [[3], [4]]]]]).print(); //start with [[[[[  5
tf.tensor6d([[[[[[1],[2]],[[3],[4]]],[[[5],[6]],[[7],[8]]]]]]).print(); //start with [[[[[[  6