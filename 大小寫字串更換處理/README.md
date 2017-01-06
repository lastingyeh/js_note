## javascripts 大小寫字串更換處理...

## 問題:

Test.assertEquals(titleCase(''), '')
Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')

## 問題說明:

Test.assertEquals(titleCase(字串,條件) ,結果)

## 解決方式

詳見 demo1.js
