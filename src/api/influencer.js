import apiUrl from '../apiConfig'
import axios from 'axios'

// create influencer
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

// show influencer index
export const influencerIndex = (user) => {
  return axios({
    url: apiUrl + '/influencers/',
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// show influencer
export const influencerShow = (user, influencerID) => {
  return axios({
    url: apiUrl + `/influencers/${influencerID}`,
    method: 'GET',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// update influencer
export const influencerUpdate = (influencer, user, influencerID) => {
  return axios({
    url: apiUrl + `/influencers/${influencerID}`,
    method: 'PATCH',
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

// update influencer V2
export const influencerUpdateV2 = (influencer, user, influencerID) => {
  console.log(user)
  return axios({
    url: apiUrl + `/influencers/${influencerID}`,
    method: 'PATCH',
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

// delete an influencer
export const deleteInfluencer = (user, influencerId) => {
  return axios({
    url: apiUrl + '/influencers/' + influencerId,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
