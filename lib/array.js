// 数组对象根据字段去重
export const uniqueArrayObject = (arr = [], key = 'id') => {
  return Object.values(
    arr.reduce((map, item) => {
      if (!map[item[key]]) {
        map[item[key]] = item;
      }
      return map;
    }, {})
  );
};
//模糊搜索
export const fuzzyQuery = (list, keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord);
  return list.filter((item) => reg.test(item[attribute]));
};
// fuzzyQuery(list, '树', 'name')

// 将对象数组转换为单一对象
export const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));
/* 
{
    '1': { id: '1', name: 'Alpha', gender: 'Male' },
    '2': { id: '2', name: 'Bravo', gender: 'Male' },
    '3': { id: '3', name: 'Charlie', gender: 'Female' },
}
*/

// 比较两个数组，不考虑顺序
export const arr_isEqual = (a, b) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
// isEqual([1, 2, 3], [1, '2', 3]); // false
//array_isEqual([{x:1,y:2},{x:1,y:2,z:[{x:2}]}],[{x:1,y:2},{x:1,y:2,z:[{x:2}]}]) -->true

//计算数组中某个值的出现次数
export const arr_countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3

//计算数组元素出现的次数
export const arr_countOccurrencesToObj = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
// arr_countOccurrencesToObj([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }

//查找数组中最后一个匹配项的索引
export const arr_lastIndex = (arr, predicate) => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);
//arr_lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4

//按键分组对象数组
export const arr_groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
/*
arr_groupBy(
    [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' },
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' },
        { branch: 'bmw', model: 'x7', year: '2020' },
    ],
    'branch'
);
{
    audi: [
        { branch: 'audi', model: 'q8', year: '2019' },
        { branch: 'audi', model: 'rs7', year: '2020' }
    ],
    bmw: [
        { branch: 'bmw', model: 'x7', year: '2020' }
    ],
    ford: [
        { branch: 'ford', model: 'mustang', year: '2019' },
        { branch: 'ford', model: 'explorer', year: '2020' }
    ],
}
*/
