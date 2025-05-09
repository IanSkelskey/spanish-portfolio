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

    if (loading) return <PageWrapper title="Loading..."><p>Loading content...</p></PageWrapper>;
    if (error) return <PageWrapper title="Error"><p>{error}</p></PageWrapper>;

    return (
        <PageWrapper title="Introduction / About Me">
            {/* Academic Info Card */}
            <div className="academic-info-card">
                <h2>Academic Information</h2>
                <div className="academic-details">
                    <div className="academic-item">
                        <span className="academic-label">Course:</span>
                        <span className="academic-value">{data.academicInfo.course}</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Institution:</span>
                        <span className="academic-value">{data.academicInfo.institution}</span>
                    </div>
                    <div className="academic-item">
                        <span className="academic-label">Semester:</span>
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
                    alt="Profile photo"
                    className="profile-image"
                />
                <div>
                    <h2>Who am I?</h2>
                    <div className="introduction-text">
                        {data.profile.introduction.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}

                        <div className="social-links">
                            {data.profile.socialLinks.map((link, index) => (
                                <p key={index}>
                                    {index === 0 ? 'Si te gusta el código también, puedes encontrarme en ' : 'Si estás en '}
                                    {link.platform} here: <a href={link.url} target="_blank" rel="noopener noreferrer">{link.platform}</a>.
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <h3>My history with Spanish</h3>
            <p>{data.spanishHistory}</p>

            <h3>Why do I study Spanish?</h3>
            <p>{data.whyLearnSpanish}</p>

            {/* Video Introduction Section - Optional but mentioned in requirements */}
            <div className="video-intro">
                <h3>Introduction Video</h3>
                <p className="video-placeholder">
                    [The introduction video will be added soon]
                </p>
                {/* Uncomment when you have a video
                <iframe 
                    width="100%" 
                    height="315" 
                    src="https://www.youtube.com/embed/your-video-id" 
                    title="Introduction Video" 
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
