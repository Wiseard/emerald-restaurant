import {
  Contact,
  Footer,
  Hero,
  MenuContainer,
  Navbar,
  Sidebar,
  Staff,
  TestimonialsContainer,
} from './components/index'

const App = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Hero />
      <MenuContainer />
      <TestimonialsContainer />
      <Staff />
      <Contact />
      <Footer />
    </main>
  )
}
export default App
