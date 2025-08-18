export default function CVPage() {
    return (
        <div className="w-full h-screen bg-gray-900">
            <iframe
                src="/Tanish_Sunita_Pareek_CV.pdf"
                className="w-full h-full border-none"
                title="Tanish Sunita Pareek CV"
                // The sandbox attribute adds a layer of security
                sandbox="allow-scripts allow-same-origin"
            />
        </div>
    );
}
