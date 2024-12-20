```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  return <h1>Home</h1>;
}

function About() {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname.endsWith('/') && location.pathname !== '/') {
      const newPath = location.pathname.slice(0, -1);
      window.location.href = newPath; 
    }
  }, [location]);

  return <h1>About</h1>;
}

function NotFound() {
  return <h1>404 Not Found</h1>;
}

export default App;
```