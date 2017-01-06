2016-05-11  
javascript 字串取代處理
73 0 javascript 檢舉文章  2016-05-26
javascripts 大小寫字串更換處理...

 

問題:

Test.assertEquals(titleCase(''), '')
Test.assertEquals(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings')
Test.assertEquals(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows')
Test.assertEquals(titleCase('the quick brown fox'), 'The Quick Brown Fox')

問題說明:

Test.assertEquals(titleCase(字串,條件) ,結果)

解決方式