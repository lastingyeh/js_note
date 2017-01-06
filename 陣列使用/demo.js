//方法一 ES5 以前寫法
function mathTest(n, p) {

    //將參數1 利用match回傳單一數字組合陣列
    var digits = n.toString().match(/\d{1}/g);

    var sum = 0;

    //將每一個元素利用forEach列出，並利用 pow 函數加總
    digits.forEach(function (element) {

        sum += Math.pow(parseInt(element), p);

        p++;
    });

    //看看有沒有錯@@
    console.log(sum);

    //規則是 若加總數字餘數為0 => 回傳整除數字 or 回傳 -1
    return sum % n == 0 ? parseInt(sum / n) : -1;

}

//方法二 混搭 reduce & map

function mathTest(n,p){

    //利用split拆成單一數字陣列
    //將每一個數字利用map進行 pow處理
    //最後把數字利用reduce進行累加，最後再除以 n

    var ans = n.toString().split('')
            .map((value,index) => Math.pow(parseInt(value), index+p))
            .reduce((prev,current) => prev+current)/n;

    //判斷結果的餘數是否 0
    return ans%1 == 0 ? ans : -1;
}
