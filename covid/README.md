### COVID-19 NOTES

#### HIERARCHY

| App.js         | withListLoading.js | List.js        | CountryCard.js | Button.js |
| -------------- | ------------------ | -------------- | -------------- | --------- |
| ListLoading.js | List.js            | CountryCard.js | Header.jsx     |           |
| Button.js      |                    |                | ShowCard.jsx   |           |
|                |                    |                |                |           |

- `App.jsx`: Renders out ListLoading that is a component that is returned by
  calling `withListLoading.js`. Will also render the `Button.js`
- `withListLoading.js`: With either render a paragraph stating that the API is
  still fetching data OR the actual `<List/>` Component
- `List.js`: Will either render a paragraph of stating no data OR a
  `<CountryCard/>` component
- `CountryCard.js`: Will show details about each country

#### TECH STACK

- Dependency Management: NPM
- Styles: CSS File, Google Fonts
- State Management: React Hooks

#### RESOURCES

- [Covid-19 API](https://api.covid19api.com/summary)
- [Axios and Fetch](https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/)
- [React Hooks](https://www.smashingmagazine.com/2020/04/react-hooks-api-guide/)
