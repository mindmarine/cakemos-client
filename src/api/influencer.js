import apiUrl from '../apiConfig'
import axios from 'axios'

export const createInfluencer = (influencer, user) => {
  console.log(influencer)
  return axios({
    method: 'POST',
    url: apiUrl + '/influencers/',
    headers: {
      Authorization: `Bearer ${user.token}`
    },
    data: {
      influencer: {
        owner: influencer.owner,
        firstname: influencer.firstname
        // lastname: influencer.lastname,
        // username: influencer.username,
        // profilephoto: influencer.profilephoto,
        // country: influencer.country,
        // city: influencer.city,
        // youtube: influencer.youtube,
        // instagram: influencer.instagram,
        // twitter: influencer.twitter,
        // tiktok: influencer.tiktok,
        // twitch: influencer.twitch,
        // youtubeaudiencesize: influencer.youtubeaudiencesize,
        // instagramaudiencesize: influencer.instagramaudiencesize,
        // twitteraudiencesize: influencer.twitteraudiencesize,
        // tiktokaudiencesize: influencer.tiktokaudiencesize,
        // twitchaudiencesize: influencer.twitchaudiencesize,
        // topics: influencer.topics,
        // tags: influencer.tags,
        // youtubeengagement: influencer.youtubeengagement,
        // instagramengagement: influencer.instagramengagement,
        // twitterengagement: influencer.twitterengagement,
        // tiktokengagement: influencer.tiktokengagement,
        // twitchengagement: influencer.twitchengagement
      }
    }
  })
}
