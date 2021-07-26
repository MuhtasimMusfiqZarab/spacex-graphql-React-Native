import {gql} from '@apollo/client';

const company = gql`
  query company {
    company {
      ceo
      coo
      cto_propulsion
      cto
      employees
      founded
      founder
      launch_sites
      name
      summary
      test_sites
      valuation
      vehicles
      links {
        elon_twitter
        flickr
        twitter
        website
      }
      headquarters {
        address
        city
        state
      }
    }
  }
`;

export default company;
