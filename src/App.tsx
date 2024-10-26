import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '@/pages/dashboard';
import Profile from '@/pages/profile';
import { ChatWidget } from '@/components/chat-widget';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <main className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <ChatWidget />
        </main>
        <Toaster />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;