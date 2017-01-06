## 來自 http://www.codewars.com/ 的每日小問題

### 問題：

list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ]) // returns 'Bart, Lisa & Maggie'

list([ {name: 'Bart'}, {name: 'Lisa'} ]) // returns 'Bart & Lisa'

list([ {name: 'Bart'} ]) // returns 'Bart' list([]) // returns ''

## 另外解法 （一行搞定
 var list = names.map((value, index) =>value.name).join(", ").replace(/(.*),(.*)$/, "$1 &$2");

           =^= 沒錯 就一行...網路上高手所寫的 頓時真的覺得境界差太多了，不過在此也是要解說一下..

          1.map：映射 value.name 集合

          2.join：將所有集合元素利用 , 串接成字串

          3.replace：(.*),(.*)$ => 代表結尾串接的規則 利用 $1 &$2取代 (註:$2前方&為什麼不需要空白是因為原本,規則為 $1, $2

