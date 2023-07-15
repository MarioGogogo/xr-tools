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


// 将对象数组转换为单一对象
export const toObject = (arr, key) => Object.fromEntries(arr.map((it) => [it[key], it]));


// 比较两个数组，不考虑顺序
export const compareArrayEqual = (a, b) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());


//计算数组中某个值的出现次数
export const countArrayOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
// countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a'); // 3

//计算数组元素出现的次数
export const countArrayOccurrencesToObj = (arr) => arr.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});
// arr_countOccurrencesToObj([2, 1, 3, 3, 2, 3]); // { '1': 1, '2': 2, '3': 3 }

//查找数组中最后一个匹配项的索引
export const lastArrIndex = (arr, predicate) => arr.reduce((prev, curr, index) => (predicate(curr) ? index : prev), -1);
//arr_lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], (i) => i % 2 === 1); // 4

//按键分组对象数组
export const groupByArray = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});
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
