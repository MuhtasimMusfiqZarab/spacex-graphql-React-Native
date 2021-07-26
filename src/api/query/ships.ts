import {gql} from '@apollo/client';

const rockets = gql`
  query ships($limit: Int, $offset: Int) {
    ships(limit: $limit, offset: $offset) {
      abs
      active
      attempted_landings
      class
      course_deg
      home_port
      id
      image
      imo
      model
      name
      position {
        latitude
        longitude
      }
      roles
      speed_kn
      status
      type
      url
      successful_landings
      weight_kg
      weight_lbs
      year_built
      missions {
        flight
        name
      }
      mmsi
    }
  }
`;

export default rockets;
