import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="text-center p-8">
                <AlertTriangle className="w-24 h-24 mx-auto mb-6 text-destructive" />
                <h1 className="font-bold text-6xl mb-4 text-foreground">404</h1>
                <p className="text-muted-foreground text-lg mb-8">Oops! The page you're looking for doesn't exist.</p>
                <Link href="/">
                    <Button variant="default" size="lg" className="mt-4 shadow-sm hover:shadow-md transition-shadow">
                        Return to Homepage
                    </Button>
                </Link>
            </div>
        </div>
    );
}
