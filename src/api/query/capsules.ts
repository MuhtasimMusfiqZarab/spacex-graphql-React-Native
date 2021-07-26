import {gql} from '@apollo/client';

const capsules = gql`
  query capsules($limit: Int, $offset: Int) {
    capsules(limit: $limit, offset: $offset) {
      id
      landings
      missions {
        flight
        name
      }
      original_launch
      reuse_count
      status
      type
      dragon {
        type
        id
        active
        description
        name
      }
    }
  }
`;

export default capsules;
