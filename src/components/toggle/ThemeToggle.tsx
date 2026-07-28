import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
    theme: "light" | "dark";
    toggleTheme: () => void;
}
export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="relative h-9 w-9 rounded-md"
        >
            <motion.div
                initial={false}
                animate={{ scale: theme === "dark" ? 0 : 1, opacity: theme === "dark" ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun className="h-4 w-4" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{ scale: theme === "light" ? 0 : 1, opacity: theme === "light" ? 0 : 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon className="h-4 w-4" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}