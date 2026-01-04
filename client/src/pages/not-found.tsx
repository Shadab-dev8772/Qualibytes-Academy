import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground px-4">
      <Card className="w-full max-w-md shadow-lg border border-gray-300 dark:border-gray-700">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <AlertCircle className="h-10 w-10 text-red-500" />
            <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
          </div>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Oops! It seems this page does not exist.  
            You might have used an incorrect URL, or the page was not added to the routing.
          </p>

          <div className="mt-6 flex justify-end">
            <Button>
              <a href="/" className="w-full h-full block text-white">
                Go Back Home
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
