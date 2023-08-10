import { Header, TestimonialsSlider } from '../../index'
import './testimonials_container.css'

const Testimonials = () => {
  // Header Title
  const { title, subtitle, description } = {
    title: 'testimonials',
    subtitle: "What Client's Say?",
    description: 'Food is the foundation of true happiness.',
  }

  return (
    <section className="testimonials-container">
      <div className="testimonials">
        <Header title={title} subtitle={subtitle} description={description} />
        <TestimonialsSlider />
      </div>
    </section>
  )
}
export default Testimonials
