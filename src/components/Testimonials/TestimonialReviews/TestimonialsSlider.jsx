import { useGlobalContext } from '../../../context/global_context'
import './testimonial_slider.css'

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle'

// import styles bundle
import 'swiper/css/bundle'

const TestimonialsSlider = () => {
  const { reviews } = useGlobalContext()

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    slidesPerView: 1,
    // effect: 'fade', // apply fade effect
    // fadeEffect: {
    //   crossFade: true, // resolve the overlapping of the slides
    // },
    // autoplay: {
    //   delay: 2000,
    // },
    pagination: {
      el: '.swiper-pagination',
    },
  })

  return (
    <section className="swiper">
      <div className="swiper-wrapper">
        {reviews.map(({ id, author, job, text }, index) => {
          return (
            <article key={id} className={`swiper-slide`}>
              <h4>{text}</h4>
              <p>{author}</p>
              <p>{job}</p>
            </article>
          )
        })}
      </div>
      <div className="swiper-pagination"></div>
    </section>
  )
}
export default TestimonialsSlider
