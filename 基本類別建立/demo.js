//建立Point class

//有兩個 fileds =>x,y

function Point(x,y){
    this.x=x;
    this.y=y;
}

//新增Point class 方法 r

Point.prototype.r = function(){

    return this.x*this.x+this.y*this.y;
}

//這樣Point物件就有 x,y,r的屬性和方法嚕..

function get(){

    var p = new Point(1,1);

    console.log(p.r());
}