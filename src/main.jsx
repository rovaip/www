import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: '#111111',
            colorBgBase: '#f9f8f5',
            colorTextBase: '#1b1d21',
            colorTextDescription: '#6b6f75',
            fontFamily:
              "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
            borderRadiusLG: 20,
          },
          components: {
            Button: {
              borderRadius: 999,
              controlHeight: 48,
              fontWeight: 600,
            },
            Card: {
              borderRadiusLG: 20,
              paddingLG: 16,
            },
            Layout: {
              colorBgBody: 'transparent',
              colorBgLayout: 'transparent',
            },
          },
        }}
      >
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>,
)
