import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default () => (
  <Carousel
    showArrows={false}
    autoPlay={true}
    showStatus={false}
    style={style.carousel}
    showThumbs={false}
    showIndicators={false}
    dynamicHeight={true}
    infiniteLoop={true}
  >
    <div className="carouselItem">
      <p>
        Wonderful staff and the experience starts the moment you open the door.
        They treat each dog as if they are their own puppies, and they go over
        and beyond what is expected from a day care place. Place is very clean,
        fresh and welcoming with lots of room for pooches to run around and
        socialize! Most importantly, my dogs love going to “school” and they get
        excited each morning when I leave home and are ready to take them to a
        new day’s adventure! Highly recommended by my pooches and myself!
      </p>
    </div>
    <div className="carouselItem">
      <p>
        Wei’s team is fabulous. Luna has been going there twice a week since
        opening and it has been exactly what she needed - great socializing and
        good exercise! Wei communicates very well with us and we know Luna is in
        a safe and nurturing environment. Prices are competitive and Wei’s
        approach to his business and customer service is rooted in the well
        being of « his » dogs! Luna will be a « client » for the foreseeable
        future! 🙂
      </p>
    </div>
    <div className="carouselItem">
      <p>
        Soba and Pepper just love this place so much! Not only they have clean
        space and nice staffs, I like the fact that they pre-screen their
        customers now they make so many new doggie friends. Best thing is they
        have grooming service now! Pepper looks fresh and handsome! They both
        come home with all the energy burnt out, which is awesome! No more
        worries about they are being board at home. Not to mention, the price is
        very reasonable, highly recommended!
      </p>
    </div>
    <div className="carouselItem">
      <p>
        A new dog daycare in the area. The staff seem really nice, some are
        volunteers at dog rescues which to me says they really care about dogs,
        and my dog loves them (she's a somewhat fearful rescue dog that doesn't
        trust humans easily, but she trusts the staff here). I'd recommend them
        for sure.
      </p>
    </div>
  </Carousel>
)

const style = {
  carousel: {
    background: 'white',
  },
}
