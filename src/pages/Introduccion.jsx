import PageWrapper from '../components/PageWrapper';
import BlockQuote from '../components/BlockQuote';
import { useDataFetching } from '../services/dataService';
import './Pages.css';
import './Introduccion.css';

// Add image resolver for /assets support
function resolveImageSrc(src) {
  if (src && src.startsWith('/assets')) {
    return `${import.meta.env.BASE_URL}assets/${src.replace(/^\/assets\//, '')}`;
  }
  return src;
}

function Introduccion() {
    const { data, loading, error } = useDataFetching('introduction');

    if (loading) return <PageWrapper title="Cargando..."><p>Cargando contenido...</p></PageWrapper>;
    if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

    return (
        <PageWrapper title="Introducción / Acerca de mí">
            {/* Academic Info Card */}
            <div className="academic-info-card">
                <h2>Información Académica</h2>
                <div className="academic-details">
                    <div className="academic-item">
                        <span className="academic-label">Curso:</span> 
                        <span className="academic-value">{data.academicInfo.course}</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Institución:</span> 
                        <span className="academic-value">{data.academicInfo.institution}</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Semestre:</span> 
                        <span className="academic-value">{data.academicInfo.semester}</span>
                    </div>
                </div>
            </div>
            
            {/* Quote Section - Required */}
            <BlockQuote 
              text={data.quote.text}
              author={data.quote.author}
            />

            <div className="profile-section">
                <img
                    src={resolveImageSrc(data.profile.image)}
                    alt="Foto de perfil"
                    className="profile-image"
                />
                <div>
                    <h2>¿Quién soy?</h2>
                    <div className="introduction-text">
                        {data.profile.introduction.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        <div className="social-links">
                            {data.profile.socialLinks.map((link, index) => (
                                <p key={index}>
                                    {index === 0 ? 'Si te gusta el código también, puedes encontrarme en ' : 'Si estás en '}
                                    {link.platform} aquí: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <h3>Mi historia con el español</h3>
            <p>{data.spanishHistory}</p>

            <h3>¿Por qué estudio español?</h3>
            <p>{data.whyLearnSpanish}</p>

            {/* Video Introduction Section - Optional but mentioned in requirements */}
            <div className="video-intro">
                <h3>Video de introducción</h3>
                <p className="video-placeholder">
                    [El video de introducción se agregará pronto]
                </p>
                {/* Uncomment when you have a video
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/your-video-id" 
                    title="Video de introducción" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen>
                </iframe>
                */}
            </div>
        </PageWrapper>
    );
}

export default Introduccion;
