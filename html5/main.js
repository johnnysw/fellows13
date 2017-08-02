/**
 * Created by apple on 17/8/2.
 */
var worker = new Worker( 'task.js' );
 worker.onmessage = function (e) { 
     alert(e.data ); 
}
worker.postMessage ( ' 哈哈 ' );
