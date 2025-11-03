import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Impact from '@/components/Impact'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Programs />
      <Impact />
      <Contact />
      <Footer />
    </main>
  )
}