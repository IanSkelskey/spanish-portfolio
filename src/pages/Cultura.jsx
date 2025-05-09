import { useDataFetching } from '../services/dataService';
import PageLoader from '../components/PageLoader';
import PageBanner from '../components/PageBanner';
import ContentCard from '../components/ContentCard';
import SectionHeader from '../components/SectionHeader';
import './Pages.css';
import './Cultura.css';

function Culture() {
  const { data, loading, error } = useDataFetching('culture');

  return (
    <PageLoader loading={loading} error={error} title="Hispanic Culture">
      {data && (
        <>
          <PageBanner 
            src={data.banner.image} 
            alt={data.banner.alt} 
          />
          
          {/* Cultural awareness reflection - Required */}
          <ContentCard className="card">
            <h3>My Cultural Awareness Development</h3>
            <p>{data.reflection.content}</p>
          </ContentCard>
          
          <SectionHeader title="Cultural Aspects Explored" icon="🌎" />
          <div className="culture-grid">
            {data.aspects.items.map((aspect, index) => (
              <ContentCard 
                key={index} 
                title={aspect.title}
              >
                <img 
                  src={aspect.image} 
                  alt={aspect.title} 
                />
                <p>{aspect.description}</p>
              </ContentCard>
            ))}
          </div>
        </>
      )}
    </PageLoader>
  );
}

export default Culture;
