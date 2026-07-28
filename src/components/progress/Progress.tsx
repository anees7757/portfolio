"use client"
import { motion } from 'framer-motion';
import useScroll from '@/hooks/useScroll';

const ProgressBar = () => {
    const completion = useScroll();
    return (
        <motion.div
            className="fixed bottom-0 z-[1000] left-0 h-1 bg-primary"
            initial={{ width: '0%' }}
            animate={{ width: `${completion}%` }}
            transition={{ duration: 0.2 }}
        />
    );
};

export default ProgressBar;
