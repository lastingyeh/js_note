
function test(names){

    var arrayValue = '';
    //檢查參數是否陣列
    if (names instanceof [].constructor) {

        //利用forEach反射

        names.forEach((value,index)=> {

            //若陣列參數為最後一個 && 陣列元素>1

            if (names.length === index+1 && names.length >1) {
            arrayValue += " & " + value.name;
        } else {
            arrayValue += ", " + value.name;
        }

    });

        //將開頭 , 取代 ""

        arrayValue = arrayValue.replace(/^,/, "").trim();

        console.log(arrayValue);
    }

    return arrayValue;
}


