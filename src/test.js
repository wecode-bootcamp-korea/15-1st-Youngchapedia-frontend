


componentDidMount() {
  Promise.all([
    fetch('/data/data.json'),
    fetch('/data/data2.json'),
  ])
  .then(([res1, res2] => Promise.all([res1.json(), res2.json()]))
  .then(([data1, data2]) => this.setState({
    movieList1: data1[0],
    movieList2: data2[0],
    isLoading: false,
    isLoading2: false,
  })));
}