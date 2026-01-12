import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AudioPlayer } from "@/components/AudioPlayer";
import Home from "@/pages/Home";
import CardDetail from "@/pages/CardDetail";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/:slug" component={CardDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <AudioPlayer />
      <Router />
    </QueryClientProvider>
  );
}

export default App;