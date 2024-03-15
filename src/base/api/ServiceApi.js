const host = 'https://www.zhihu.com';

const buildQueryString = paramMap => {
  if (!paramMap) {
    return '';
  }
  let query = '';
  for (let key in paramMap) {
    if (key === '' || paramMap[key] === '') {
      continue;
    }
    if (query !== '') {
      query += '&';
    }
    query += `${encodeURIComponent(key)}=${encodeURIComponent(paramMap[key])}`;
  }
  if (query !== '') {
    query = '?' + query;
  }
  return query;
};

const doGet = async (path, params) => {
  const url = `${host}${path}${buildQueryString(params)}`;
  return await fetch(url);
};

const doPost = async (path, params, data) => {
  const url = `${host}${path}${buildQueryString(params)}`;
  return await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  });
};

export default {doGet, doPost};
