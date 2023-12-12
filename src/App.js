import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import "./styles/main.css"
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';
import ScrollToTop from './utils/scrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:slug" element={<Project />} />
            {/* <Route path="contacts" element={<Contacts />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route path="*" element={<NotFound />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
