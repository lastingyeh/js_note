//繼承模式 繼承對象:參數p(也就是 java 的 super)
function inherit(p) {

    //  null = >丟出錯誤

    if (p == null) {
        throw TypeError();
    }

    //若存在物件建立的方法 => 回傳 一個擁有 p物件特性的object(也就是java this)

    if (Object.create) {
        return Object.create(p);
    }

    //若上述都不符合

    //檢查 p 的類型

    var t = typeof p;

    //若類型非object && function 其中一種 => 丟出錯誤

    if (t !== "object" && t !== "function") {
        throw TypeError();
    }

    //建立一個 f的建構函數(p.s.跟方法一模一樣 真是有點!@#$%)

    function f() { };

    //將p 指向 f 的原型(這樣就有物件參考了)

    f.prototype = p;

    //回傳 f 物件

    return f();
}

//大家好...我是測試----------------------------------------------------------------------------------------------

function inheritNote() {

    //建立 o 物件(充當媽媽用)

    var o = {};

    //給他一個屬性 x
    o.x = 1;

    //p 繼承 o
    var p = inherit(o);

    //p 新增一個屬性 y
    p.y = 2;

    //q再繼承p

    var q = inherit(p);

    //q 也新增屬性 z
    q.z = 3;

    //這樣一來 q 就擁有 o && p && 自己的屬性嚕 (當然o最上層的Object也包含)

    //toString() 是最上層 Object的方法

    var s = q.toString();

    //結果測試

    q.x = 1;

    q.y = 2;

    //若是修改 q.x = 5; 則 q.x就會被覆寫成 5，但是o.x 依然是1

}
