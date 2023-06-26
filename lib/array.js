// 数组对象根据字段去重
export const uniqueArrayObject = (arr = [], key = 'id') => {
  if (arr.length === 0) return;
  let list = [];
  const map = {};
  arr.forEach((item) => {
    if (!map[item[key]]) {
      map[item[key]] = item;
    }
  });
  list = Object.values(map);

  return list;
};

//模糊搜索
export const fuzzyQuery = (list, keyWord, attribute = 'name') => {
  const reg = new RegExp(keyWord);
  const arr = [];
  for (let i = 0; i < list.length; i++) {
    if (reg.test(list[i][attribute])) {
      arr.push(list[i]);
    }
  }
  return arr;
};

// fuzzyQuery(list, '树', 'name')
