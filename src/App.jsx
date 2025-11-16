import { Layout } from 'antd'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import './App.css'

function App() {
  return (
    <Layout className="app-shell">
      <Layout.Content className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:slug" element={<Service />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout.Content>
    </Layout>
  )
}

export default App
