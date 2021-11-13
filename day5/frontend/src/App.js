import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<h1>Главная страница</h1>} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/contact" element={<h1>Страница связи</h1>} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
