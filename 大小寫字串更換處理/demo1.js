function titleCase(title, minorWords) {

    //設定字串文字索引值(replace回呼函數使用)

    var wordIndex = 0;

    //設定特定篩選字陣列

    var minorArray = [];

    //若是字串為空值(第一個條件)

    if(title==''){

        return '';

    }

    //設定字串取代條件

    var formatStr = title.replace(/\b\w+\b/g,function(word){

        //Reg規則 =>空值+文字+空值

//若規則取出字串非開頭字串 以及篩選字串非undefined(避免第二個參數未輸入)

        if(wordIndex>0 && typeof minorWords!='undefined'){

            minorArray = minorWords.split(' ');

            for(var i=0;i<minorArray.length;i++){

                //若符合篩選字串 =>本字串皆變成小寫

                if(minorArray[i].toLowerCase()==word.toLowerCase()){

                    return word.substring(0).toLowerCase();

                }

            }

        }

        wordIndex++;

        //若不符合篩選字串，則首字母大寫+其他字母小寫

        return word.substring(0,1).toUpperCase()+word.substring(1).toLowerCase();

    });

    //回傳處理後字串

    return formatStr;

}
