-- Leetcode 584: Find the Customer Referee

Select name 
from Customer 
Where referee_id !=2 or referee_id is null;

/* 
WHERE referee_id != 2 or referee_id = null; ❌
WHERE referee_id != 2 or referee_id is null; ✔
*/