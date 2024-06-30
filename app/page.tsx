
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import ExampleTasks from '@/components/ExampleTasks'
import Requirements from '@/components/Requirements'
import Services from '@/components/Services'
import Selection from '@/components/Selection'
import Expectations from '@/components/Expectations'
import Advices from '@/components/Advices'
import Testimonials from '@/components/Testimonials'
import Materials from '@/components/Materials'
import CallToAction from '@/components/CallToAction'
import Faq from '@/components/Faq'
import InTouch from '@/components/InTouch'
import CallToAction2 from '@/components/CallToAction2'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Programs />
      <ExampleTasks />
      <Requirements />
      <Services />
      <Selection />
      <Expectations />
      <Advices />
      <Testimonials />
      <Materials/>
      <CallToAction />
      <Faq />
      <InTouch />
      <CallToAction2 />
      <Footer />
    </main>
  );
}
