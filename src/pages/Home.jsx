import { Button, Card, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import { cards } from '../content/cards'
import ServiceIcon from '../components/ServiceIcon.jsx'
import '../App.css'

const { Title, Paragraph, Text } = Typography

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-shell">
      <div className="logo-stack" aria-label="ROVAIP identity">
        <img src="/logo.png" alt="ROVAIP" className="brand-logo" />
      </div>
      <Title level={1} className="hero-heading">
        <span className="hero-heading__line">AI Solutions for Architectural</span>
        <br />
        <span className="hero-heading__line">Visualization &amp; Planning</span>
      </Title>
      <Paragraph className="hero-subtitle">
        Upload floor plans or reference images to generate
        <br />
        3D visualizations and optimized layouts with AI.
      </Paragraph>

      <div className="cards-grid" role="menu" aria-label="ROVAIP services">
        {cards.map((card) => (
          <Card
            key={card.slug}
            className="service-card"
            role="menuitem"
            tabIndex={0}
            onClick={() => navigate(`/service/${card.slug}`)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                navigate(`/service/${card.slug}`)
              }
            }}
          >
            <div className="service-card__icon">
              <ServiceIcon name={card.icon} />
            </div>
            <Title level={4} className="service-card__title">
              {card.title}
            </Title>
            <Paragraph className="service-card__copy">
              {card.description.split('\n').map((line, index, arr) => (
                <span key={`${card.slug}-desc-${index}`}>
                  {line}
                  {index < arr.length - 1 && <br />}
                </span>
              ))}
            </Paragraph>
          </Card>
        ))}
      </div>

      <Button
        type="primary"
        size="large"
        className="cta-button"
        onClick={() => navigate(`/service/${cards[0].slug}`)}
      >
        Get Started
      </Button>
    </div>
  )
}

export default Home
