import React from 'react'
import InstagramEmbed from 'react-instagram-embed'

const InstagramPage = () => (
  <InstagramEmbed
    url="https://www.instagram.com/p/CTVpgkHp3gp/"
    clientAccessToken="1001092054012708|IGQVJVNDE0aXQ0MHBmN3BtbHZArX2JCZAGtieVI0YzhxcWpQS01hTENsY3Rma3V1b3VFUU1jOS1fRmNhQUxvX0Y4YnM1X3dYWW5qbWc4QUdpYndYMDZADay0ya21NMHZACcHBodnBOOElGdGpNRHhsTWl1bAZDZD"
    maxWidth={320}
    hideCaption={false}
    containerTagName="div"
    protocol=""
    injectScript
    onLoading={() => {}}
    onSuccess={() => {}}
    onAfterRender={() => {}}
    onFailure={() => {}}
  />
)

export { InstagramPage }
