function getCount(words) {

    var countObj = null;

    //若符合字串類型以及非空值
    if (typeof words === 'string' && words != '') {

        words = words.toString();
        //1.輸出符合 a e i o u陣列(忽略大小寫 /i)
        var isMatchStr = words.match(/[aeiou]/gi);
        //輸出符合 a-z 所有字母陣列(忽略大小寫 /i)
        var allMatchStr = words.match(/[a-z]/gi);
        //2.未符合個數
        var notMatchStrLength = 0;
        //若 1 & 2 都不等於 null
        if (allMatchStr != null && isMatchStr != null) {
            //2-1 (輸出非 a e i o u 個數)
            notMatchStrLength = allMatchStr.length - isMatchStr.length;
        }

        //設定物件 {符合 a e i o u 個數,不符合個數}
        countObj = { vowels: isMatchStr != null ? isMatchStr.length : 0, consonants:notMatchStrLength };

    } else {
        //不符合以上條件 個數設定皆為 0
        countObj = { vowels: 0, consonants: 0 };

    }

    return countObj;
}
