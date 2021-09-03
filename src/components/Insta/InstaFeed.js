import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

import { Carousel } from 'react-responsive-carousel'
import Feed from './Feed'

// import './instaFeeds.css'

const InstaFeeds = ({ token, ...props }) => {
  const [feeds, setFeedsData] = useState([])
  //use useRef to store the latest value of the prop without firing the effect
  const tokenProp = useRef(token)
  // tokenProp.current = token
  // console.log('TOKEN', token)
  useEffect(() => {
    // this is to avoid memory leaks
    const abortController = new AbortController()

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=20&access_token=${token}`
          )
          .then(resp => {
            setFeedsData(resp.data.data)
          })
      } catch (err) {
        console.log('error', err)
      }
    }

    // manually call the fecth function
    fetchInstagramPost()

    return () => {
      // cancel pending fetch request on component unmount
      abortController.abort()
    }
  }, [props.limit])

  return (
    <div style={style.outer}>
      <div style={style.inner}>
        <Carousel
          showArrows={true}
          autoPlay={true}
          showStatus={false}
          style={style.carousel}
          showThumbs={false}
          showIndicators={false}
          infiniteLoop={true}
          stopOnHover={true}
        >
          {feeds.map(feed => (
            <Feed key={feed.id} feed={feed} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

const style = {
  outer: {
    maxHeight: '600px',
    margin: '0 auto',
    paddingBottom: '50px',
    display: 'flex',
  },
  inner: {
    width: '350px',
    height: '90%',
    margin: '0 auto',
    display: 'flex',
  },
}

export default InstaFeeds
