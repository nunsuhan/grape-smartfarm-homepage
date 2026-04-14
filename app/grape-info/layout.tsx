import { Navbar } from '@/components/navbar';

export default function GrapeInfoLayout({
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
