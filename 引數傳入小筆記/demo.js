//建立引數陣列
function array(a, n) { return Array.prototype.slice.call(a, n || 0) };

function partialLeft(f/*,...*/) {
    //第一階段 partialLeft(f,2)
    //arguments = [[x,y,z],2]
    var args = arguments;//將引數暫存 args

    return function () {
        //第二階段 (3,4)
        //args = [[x,y,z],2]
        //arguments = [3,4]
        var a = array(args, 1);//[[x,y,z],2].slice(1)=>[2]
        a = a.concat(array(arguments));//[2].concat([3,4].slice(0))=>[2,3,4]

        return f.apply(this, a);//f(2,3,4)
    }
}

function partialRight(f/*,...*/) {
    //第一階段 partialRight(f,2)
    //arguments = [[x,y,z],2]
    var args = arguments;//暫存在 args

    return function () {
        //第二階段 (3,4)
        //args = [[x,y,z],2]
        //argumnets = [3,4]
        var a = array(arguments); //[3,4].slice(0) =>[3,4]
        a = a.concat(array(args, 1));//[3,4].concat([x,y,z].slice(1))=>[3,4,2]
        return f.apply(this, a);//f(3,4,2)
    }
}

//自訂函數規則
var f = function (x, y, z) {
    return x * (y - z);
}

//結果測試
partialLeft(f, 2)(3, 4);//2*(3-4) = -2
partialRight(f, 2)(3, 4);//3*(4-2) = -6
