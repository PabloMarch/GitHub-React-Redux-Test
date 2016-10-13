import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import ResultsItem from '../stateless/ResultsItem';

// Repositories fetch data
// import reposData from 'json!data/userReposDetail.json';
// TODO: get data from path above
const reposData =   {
  "name": "10-minute-responsive-email",
  "description": "Code from the Foundation meetup - Foundation for Emails",
  "clone_url": "https://github.com/zurb/10-minute-responsive-email.git",
  "created_at": "2016-07-13T16:40:36Z",
  "homepage": null,
  "watchers": 0,
  "forks": 0
};

test('test data ingestion on users repository detail', t => {
  const resultsItem = shallow(
    <ResultsItem detail={reposData} />
  );

  // test component main class
  t.true(resultsItem.hasClass('user-search-detail--item'));
  // test title
  t.is(resultsItem.find('.user-search-detail--title').text(), reposData.name.replace(/-/g, ' '));
  // test description
  t.is(resultsItem.find('.panel-body p').first().text(), reposData.description);
  // test repository url
  t.regex(resultsItem.find('.cta-clone').prop('href'), /(github-mac:\/\/openRepo\/)((git|ssh|http(s)?)|(git@[\w\.]+))(:(\/\/)?)([\w\.@\:/\-~]+)(\.git)/);
});
