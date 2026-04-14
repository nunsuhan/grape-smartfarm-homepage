import { Navbar } from '@/components/navbar';

export default function TechnologyLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
