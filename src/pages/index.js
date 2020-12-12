import { Link } from 'gatsby'
import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import didi from '../assets/images/didi.png'
import yoshiko from '../assets/images/yoshiko.png'
import trainer from '../assets/images/trainer.png'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'
import Carousel from '../components/Carousel'
import Pricing from '../components/Pricing'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const Index = () => {
  const [stickyNav, setStickyNav] = useState(false)
  const [showPrice, setShowPrice] = useState(false)

  const handlePriceClick = e => {
    showPrice ? setShowPrice(false) : setShowPrice(true)
  }

  return (
    <Layout>
      <Helmet title="Gatsby Starter - Stellar" />
      <Header />
      <Waypoint
        onEnter={() => setStickyNav(false)}
        onLeave={() => setStickyNav(true)}
      ></Waypoint>
      <Nav sticky={stickyNav} />

      <div id="main">
        <section id="intro" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Welcome Home</h2>
                <h3>A new place for our furry babies</h3>
              </header>
              <p>
                Baby D’s Home is a new dog daycare on Broadway near Main st.
                Vancouver, that’s founded by dog lovers! Our goal is to create a
                comfortable environment for our furry babies to hang out and
                socialize with new friends.
              </p>
            </div>
            <span className="image">
              <img src={didi} alt="" />
            </span>
          </div>
        </section>

        <section id="daycare" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Day Care</h2>
                <h3>How is the day being spent in Baby D’s Home?</h3>
              </header>

              <h3>Morning</h3>
              <p>
                When our furry friends arrive, we realize that they may have
                been too excited to do all their “business”. Soooo…out we go for
                our first walk of the day. If it’s wet (really, Vancouver!) paws
                and bellies get toweled off. Once that’s done, the dogs see
                which of their friends have gotten there before them. The
                running, the chasing, the playing that ensues; and we try to
                capture all this in photos and little videos that we share on
                Instagram throughout the day. The first 2-3 hours at Baby D’s
                home are busy with these activities, and of course your babies
                are rewarded with little training treats for being so well
                behaved.
              </p>
              <h3>Afternoon</h3>
              <p>
                Then around noon, lunch is served (in private) for those of our
                friends that brought a “lunch box”. Once their bellies are full,
                they go for another walk and often opt for a nap once they get
                back. All that playing can be exhausting, don’t you know? Also,
                some pups come for a half day around this time, so there’s more
                friends to greet and sniff.
                <br />
                The afternoon is often lower key than the morning, but that
                doesn’t mean that it’s any less fun. More walks and more playing
                continue until it’s time to get picked up, so be prepared for
                your furry companion to be tuckered out when you get home.
              </p>
            </div>
          </div>
          <h2>Daycare In take Process: </h2>
          <p>
            All dogs must have their 3rd set of shots and be spayed or neutered
            (by 7 months of age). Book your free orientation and 3 hour trial
            for your fur baby (Available on Mondays, Fridays and Saturdays).
            This allows you to tour the facility and your pup to play and
            explore.
          </p>
          <h3>Regular Pricing for Daycare (valid for 6 months)</h3>
          <button onClick={() => handlePriceClick()}>
            <a className="icon fa-expand">
              {' '}
              {showPrice ? 'Hide Pricing Table' : 'Show Pricing Table'}
            </a>
          </button>
          {showPrice ? <Pricing /> : ''}
        </section>

        <section id="grooming" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Grooming</h2>
                <h3>Yoshiko - Groomer</h3>
              </header>
              <p>
                Our groomer Yoshiko is a Master Groomer with over 35 years of
                combined experience in Japan and Canada. She has graduated from
                the Japan Dog Grooming School and is a certified Master groomer
                by the N.D.G.A.A.
                <br />
                <br />
                Yoshiko moved to Canada in 1987 and is fluent in Japanese and
                English. She specializes in styling small to medium dog breeds,
                with extensive experience in terrier breeds.
              </p>
            </div>
            <span className="image">
              <img src={yoshiko} alt="" />
            </span>
          </div>
        </section>

        <section id="training" className="main">
          <div className="spotlight">
            <div className="content">
              <header className="major">
                <h2>Training</h2>
                <h3>Holly Ovington – Trainer</h3>
              </header>
              <p>
                Holly has been passionate about dogs from the get go! Holly was
                part of 4-H dog clubs from a young age, learning to train and
                show her own dogs.
                <br />
                She volunteered at a local vet clinic and the SPCA. She then
                began working with dog daycares and dog walking companies.
                <br />
                The more she learned, the more she was pulled toward training
                dogs. She is passionate about helping people and their dogs to
                thrive. When a dog and their owners work together with patience
                and positivity the possibilities are endless and magical.
                <br />
              </p>
            </div>
            <span className="image">
              <img src={trainer} alt="" />
            </span>
          </div>
          <footer className="footer">
            <h3>Credentials</h3>
            <ul>
              <li>
                Karen Pryor Academy Dog Trainer Professional Program (KPA-CTP)
              </li>
              <li>Fear Free Animal Trainer Certification</li>
              <li>Walks N' Wags First Aid Certification</li>
              <li>Lemonade Conference 2020</li>
              <li>Dog Biz Dog Walking Academy Instructor</li>
              <li>Catch Canine Trainers Academy Mentor</li>
            </ul>
          </footer>
        </section>

        {/* <section id="review" className="main special">
          <header className="major">
            <h2>We've got people taking</h2>
            <Carousel />
          </header>
        </section> */}
      </div>
    </Layout>
  )
}

export default Index
