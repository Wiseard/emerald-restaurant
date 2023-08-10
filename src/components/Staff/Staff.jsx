import { AnimationOnScroll } from 'react-animation-on-scroll'
import { staff } from '../../utils/constants'
import { Header } from '../index'
import './staff.css'

const Staff = () => {
  // Header Title
  const { title, subtitle, description } = {
    title: 'staff',
    subtitle: 'come to meet us',
    description:
      'We see our customers as invited guests to a party, and we are the hosts.',
  }
  return (
    <section className="section container staff-container" id="staff">
      <Header title={title} subtitle={subtitle} description={description} />
      <div className="staff grid">
        {staff.map(({ id, img, name, job, text }) => {
          return (
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOnce={true}
              offset={150}
              key={id}
              className="staff-member"
            >
              <img src={img} alt={name} />
              <div className="member-info">
                <p className="member-job">{job}</p>
                <h4 className="member-name">{name}</h4>
                <p className="member-text">{text}</p>
              </div>
            </AnimationOnScroll>
          )
        })}
      </div>
    </section>
  )
}
export default Staff
