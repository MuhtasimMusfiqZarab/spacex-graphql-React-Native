import {gql} from '@apollo/client';

const histories = gql`
  query histories($sort: String) {
    histories(sort: $sort) {
      id
      title
      details
      event_date_utc
      links {
        article
        reddit
        wikipedia
      }
    }
  }
`;

export default histories;
