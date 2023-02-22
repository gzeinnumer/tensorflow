function process() {
    //kodaingan bahaya kalau dijalankan ber interval
    // const a = tf.fil([3000,3000], 77);
    // const b = tf.fil([2000,500], 88);
    // const c = tf.transpose(a);

    // console.log("Byte : "+tf.memory().numBytes);
}
// process();
// setInterval(process, 1000000); 

//https://js.tensorflow.org/api/latest/#tidy
function processTidy() {
    tf.tidy(() => { 
        const a = tf.fill([3000,3000], 77);
        const b = tf.fill([2000,500], 88);
        const c = tf.transpose(a);

    });

    console.log("Byte : "+tf.memory().numBytes);
}