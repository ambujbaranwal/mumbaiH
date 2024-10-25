import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Dashboard from '@/pages/dashboard';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <main className="min-h-screen bg-background">
        <Dashboard />
      </main>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;