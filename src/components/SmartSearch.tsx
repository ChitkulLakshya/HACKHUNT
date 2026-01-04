import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SmartSearchProps {
    onResults?: (results: any[]) => void;
    className?: string;
}

export function SmartSearch({ onResults, className }: SmartSearchProps) {
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSearch = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/search/smart`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query })
            });
            const data = await res.json();
            if (onResults) {
                onResults(data.results);
            }
        } catch (error) {
            console.error("Search failed", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={cn("relative w-full max-w-2xl mx-auto", className)}>
            <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                <form onSubmit={handleSearch} className="relative flex items-center bg-background rounded-lg p-1">
                    <Sparkles className={cn("w-5 h-5 ml-3 text-purple-500", loading && "animate-pulse")} />
                    <Input 
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Describe your dream hackathon... (e.g. 'Remote AI hackathons with prizes')" 
                        className="border-0 focus-visible:ring-0 shadow-none bg-transparent flex-1 h-12 text-base"
                    />
                    <Button 
                        type="submit" 
                        size="sm" 
                        className="mr-1 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-md"
                        disabled={loading}
                    >
                        {loading ? "Thinking..." : <ArrowRight className="w-4 h-4" />}
                    </Button>
                </form>
            </div>
        </div>
    );
}
