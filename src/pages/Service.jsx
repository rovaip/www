import { Button, Select, Typography } from 'antd'
import { LeftOutlined } from '@ant-design/icons'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getCardBySlug } from '../content/cards.js'
import ServiceIcon from '../components/ServiceIcon.jsx'
import '../App.css'

const { Title, Paragraph, Text } = Typography

function Service() {
  const navigate = useNavigate()
  const { slug } = useParams()
  const card = getCardBySlug(slug)

  if (!card) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="service-shell">
      <Button
        type="text"
        icon={<LeftOutlined />}
        className="back-link"
        onClick={() => navigate(-1)}
      >
        Back
      </Button>

      <header>
        <div className="logo-stack">
          <img src="/logo.png" alt="ROVAIP" className="brand-logo" />
        </div>
        <Title level={2}>{card.title}</Title>
        <Paragraph>{card.intro}</Paragraph>
      </header>

      <div className="workbench">
        <div className="drop-zone" aria-live="polite">
          <div>
            <div className="service-card__icon" style={{ margin: '0 auto 0.75rem auto' }}>
              <ServiceIcon name="gallery" />
            </div>
            <Paragraph className="drop-zone__label">
              <strong>{card.dropInstruction}</strong>
            </Paragraph>
            <Paragraph type="secondary">
              Supported: JPG, PNG, PDF up to 100MB
            </Paragraph>
          </div>
        </div>

        <div className="settings-card">
          <Text strong>AI SETTINGS</Text>
          {card.settings.map((setting) => (
            <div className="settings-row" key={setting.label}>
              <label htmlFor={`${card.slug}-${setting.label}`}>{setting.label}</label>
              <Select
                id={`${card.slug}-${setting.label}`}
                size="large"
                defaultValue={setting.defaultValue}
                options={setting.options.map((option) => ({ value: option, label: option }))}
              />
            </div>
          ))}
          <Button type="primary" block>
            Generate Preview
          </Button>
        </div>
      </div>

      <div className="review-section">
        <Title level={4}>ROVAIP STUDIO REVIEW</Title>
        <div className="review-panel" aria-label="Output preview placeholder" />
      </div>
    </div>
  )
}

export default Service
