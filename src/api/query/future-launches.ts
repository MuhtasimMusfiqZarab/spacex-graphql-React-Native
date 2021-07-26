import {gql} from '@apollo/client';

const futureLaunches = gql`
  query launchNext {
    launchNext {
      id
      is_tentative
      launch_site {
        site_name
        site_id
        site_name_long
      }
      rocket {
        rocket_name
        rocket_type
        rocket {
          type
          name
          id
        }
      }
      launch_date_utc
      launch_date_local
      launch_year
      upcoming
      mission_name
      launch_date_unix
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
      telemetry {
        flight_club
      }
      tentative_max_precision
      static_fire_date_unix
      static_fire_date_utc
      details
    }
  }
`;

export default futureLaunches;
