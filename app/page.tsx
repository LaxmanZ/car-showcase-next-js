import CustomFilters from '@/components/CustomFilters';
import Hero from '@/components/Hero';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore The Car You Might Like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className='home__filter-container'>
            <CustomFilters title="fuel" />

            <CustomFilters title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
