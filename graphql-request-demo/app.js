import { request, gql } from 'graphql-request';

const query = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

request('https://api.spacex.land/graphql/', query).then((data) => console.log(data));
