import PageWrapper from '../components/PageWrapper';
import { useDataFetching } from '../services/dataService';
import '../pages/Pages.css';

function Objetivos() {
  const { data, loading, error } = useDataFetching('goals');

  if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
  if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

  return (
    <PageWrapper title="Mis objetivos / Vision Board">
      {/* Prior Knowledge Section - Required */}
      <div className="prior-knowledge card">
        <h3>{data.priorKnowledge.title}</h3>
        <p>{data.priorKnowledge.content}</p>
      </div>
      
      <div className="vision-board">
        <h3>{data.visionBoard.title}</h3>
        <img 
          src={data.visionBoard.image} 
          alt="Vision Board" 
          className="vision-image" 
        />
      </div>
      
      <h3>{data.shortTermGoals.title}</h3>
      <ul className="goals-list">
        {data.shortTermGoals.goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.category}:</strong> {goal.description}
          </li>
        ))}
      </ul>
      
      <h3>{data.longTermGoals.title}</h3>
      <ul className="goals-list">
        {data.longTermGoals.goals.map((goal, index) => (
          <li key={index}>
            <strong>{goal.category}:</strong> {goal.description}
          </li>
        ))}
      </ul>
      
      <div className="card">
        <h3>{data.inspiration.title}</h3>
        <p>{data.inspiration.content}</p>
      </div>
    </PageWrapper>
  );
}

export default Objetivos;
