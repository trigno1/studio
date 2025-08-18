import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="w-full border-t">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground gap-4">
                <p>&copy; {new Date().getFullYear()} Tanish Sunita Pareek. All Rights Reserved.</p>
                <div className='flex items-center gap-4'>
                    <Link href="/cv" className="hover:text-primary transition-colors">View CV</Link>
                    <p>Designed & Built with ❤️ and 🏎️</p>
                </div>
            </div>
        </footer>
    );
}
