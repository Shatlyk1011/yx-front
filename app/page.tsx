
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import ExampleTasks from '@/components/ExampleTasks'
import Requirements from '@/components/Requirements'
import Services from '@/components/Services'
import Selection from '@/components/Selection'

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
    </main>
  );
}
