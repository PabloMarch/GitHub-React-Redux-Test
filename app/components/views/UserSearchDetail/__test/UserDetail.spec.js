import React from 'react';
import test from 'ava';
import { shallow } from 'enzyme';
import UserDetail from '../stateless/UserDetail';

// user fetch data
// import userData from 'json!data/userDetail.json';
// TODO: get data from path above
const userData = {
  "login": "zurb",
  "type": "Organization",
  "avatar_url": "https://avatars.githubusercontent.com/u/156122?v=3",
  "html_url": "https://github.com/zurb",
  "public_repos": 82
};

test('', t => {
  const userDetail = shallow(
    <UserDetail detail={userData} />
  );

  // test username
  t.is(userDetail.find('.media-heading').text(), userData.login);
  // test user type
  t.is(userDetail.find('.media-body li').first().text(), `Type: ${userData.type}`);
  // test user url
  t.regex(userDetail.find('.github-url').prop('href'), /(http(s)?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\%\?\=\/\w \.-]*)*\/?$/);
});
