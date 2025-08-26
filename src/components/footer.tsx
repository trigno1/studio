import Link from 'next/link';
import { Github, Linkedin, Instagram, Mail, Youtube } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="container mx-auto px-4 py-12 text-center">
                <h3 className="text-2xl font-bold">Connect with me</h3>
                <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                    Connect with me to explore more in web3 community and technology.
                </p>
                <div className="mt-6 flex justify-center space-x-6">
                    <a href="https://github.com/trigno1" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
                    <a href="https://linkedin.com/in/tanish-sunita-pareek" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-6 w-6" /></a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Youtube className="h-6 w-6" /></a>
                    <a href="mailto:tanishpareek200@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
                </div>
                <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
                    <p>&copy; {new Date().getFullYear()} Tanish Sunita Pareek. All Rights Reserved.</p>
                    <div className='flex items-center gap-4'>
                        <p>Designed & Built with ❤️ and 🏎️</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
