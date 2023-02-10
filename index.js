const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('01674ea5c3804877b00b928293219a30');
const today = new Date();
const toDate = today.toISOString().split("T")[0];

newsapi.v2.everything({
  q: 'Tesla',
  from: toDate,
  to: toDate,
  language: 'en',
  sortBy: 'relevancy',
  page: 1
}).then(response => {
  console.log(response);
});