import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Cultura.css';

function Culture() {
  const { data, loading, error } = useDataFetching('culture');

  if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Hispanic Culture">
      <div className="culture-header">
        <img 
          src={data.banner.image} 
          alt={data.banner.alt} 
          className="culture-banner" 
        />
      </div>
      
      {/* Cultural awareness reflection - Required */}
      <div className="culture-reflection card">
        <h3>My Cultural Awareness Development</h3>
        <p>{data.reflection.content}</p>
      </div>
      
      <h3>Cultural Aspects Explored</h3>
      <div className="culture-grid">
        {data.aspects.items.map((aspect, index) => (
          <div className="culture-card" key={index}>
            <h4>{aspect.title}</h4>
            <img 
              src={aspect.image} 
              alt={aspect.title} 
            />
            <p>{aspect.description}</p>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
}

export default Culture;
