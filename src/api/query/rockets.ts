import {gql} from '@apollo/client';

const rockets = gql`
  query rockets {
    rockets {
      type
      name
      id
      active
      first_flight
      stages
      success_rate_pct
      country
      company
      cost_per_launch
      boosters
      description
      height {
        feet
        meters
      }
      mass {
        kg
        lb
      }
    }
  }
`;

export default rockets;
