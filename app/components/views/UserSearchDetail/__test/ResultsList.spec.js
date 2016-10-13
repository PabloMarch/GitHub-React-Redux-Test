import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import ResultsList from '../stateless/ResultsList';

// Repositories fetch data
// import reposData from 'json!data/userReposDetail.json';
// TODO: get data from path above
const reposData = [{ id: 123 }, { id: 456 }, { id: 678 }];

// test when response has items
test('test repos object passed throw the ResultsList component', t => {
  const resultsList = shallow(
    <ResultsList resultsList={reposData} />
  );

  // test amount of children
  t.is(resultsList.find('ResultsItem').length, 3);
});

// test when repost data is empty
test('test ResultsList component when any item is passed', t => {
  const resultsList = shallow(
    <ResultsList resultsList={[]} />
  );
  t.truthy(resultsList.type('p'));
});
