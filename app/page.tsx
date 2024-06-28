
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Programs from '@/components/Programs'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden">
      <Navigation />
      <Hero />
      <Programs />
    </main>
  );
}
