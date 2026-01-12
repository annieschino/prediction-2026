import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md mx-4 shadow-lg border-primary/10 bg-white/50 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-primary opacity-80" />
            <h1 className="text-2xl font-display font-bold text-foreground">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-muted-foreground font-serif leading-relaxed">
            The path you are looking for does not exist in these cards. Perhaps it is yet to be written.
          </p>

          <div className="mt-8">
            <Link href="/" className="font-sans text-xs tracking-widest uppercase text-primary hover:underline">
              Return to the deck
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
