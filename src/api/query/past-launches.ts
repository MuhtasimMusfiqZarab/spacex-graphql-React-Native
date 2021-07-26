import {gql} from '@apollo/client';

const pastLaunches = gql`
  query launchesPast($limit: Int, $offset: Int) {
    launchesPast(limit: $limit, offset: $offset) {
      id
      details
      is_tentative
      launch_date_utc
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      mission_id
      mission_name
      static_fire_date_utc
      telemetry {
        flight_club
      }
      tentative_max_precision
      rocket {
        rocket_name
        rocket_type
        rocket {
          type
          name
          id
        }
      }
      links {
        article_link
        mission_patch_small
        mission_patch
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
      }
    }
  }
`;

export default pastLaunches;
