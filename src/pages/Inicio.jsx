import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import PageBanner from '../components/PageBanner';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import CustomList from '../components/CustomList';
import './Pages.css';
import './Inicio.css';

function Home() {
  const { data, loading, error } = useDataFetching('home');

  return (
    <PageLoader loading={loading} error={error} title="Welcome to my Spanish ePortfolio">
      {data && (
        <>
          <PageBanner 
            src={data.heroImage.src} 
            alt={data.heroImage.alt} 
            className="hero-section"
          />
          
          <SectionHeader title={data.welcome.title} />
          <p>{data.welcome.content}</p>
          
          <ContentCard className="card">
            <h3>{data.sections.title}</h3>
            <CustomList 
              items={data.sections.items} 
              className="sections-list"
            />
          </ContentCard>
        </>
      )}
    </PageLoader>
  );
}

export default Home;
