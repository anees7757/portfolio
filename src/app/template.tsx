import ProgressBar from '@/components/progress/Progress';
import { ReactNode } from 'react';
export default function Template({ children }: { children: ReactNode }) {
    return (
        <div>
            <ProgressBar />
            <div>{children}</div>
        </div>
    );
}
