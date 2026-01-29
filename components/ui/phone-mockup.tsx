import Image from 'next/image';
import { cn } from '@/lib/utils';

interface PhoneMockupProps {
    image?: string;
    overlayImage?: string;
    className?: string;
    children?: React.ReactNode;
}

export function PhoneMockup({ image, overlayImage, className, children }: PhoneMockupProps) {
    return (
        <div className={cn("relative w-[280px] h-[580px] mx-auto", className)}>
            {/* iPhone Frame */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-[40px] p-3 shadow-2xl shadow-purple-500/20 border-4 border-gray-800">
                {/* Notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-full z-20" />

                {/* Screen */}
                <div className="w-full h-full bg-gray-900 rounded-[32px] overflow-hidden relative">
                    {children ? (
                        <div className="w-full h-full overflow-y-auto custom-scrollbar">
                            {children}
                        </div>
                    ) : (
                        <>
                            {image && (
                                <Image
                                    src={image}
                                    alt="App Screen"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            )}

                            {/* Custom Overlay for Diagnosis (Leaf) */}
                            {overlayImage && (
                                <div className="absolute top-[160px] left-0 right-0 h-[220px] bg-secondary-purple/20 z-10 overflow-hidden">
                                    <Image
                                        src={overlayImage}
                                        alt="Diagnosis Leaf"
                                        fill
                                        className="object-cover"
                                    />
                                    {/* Scan Overlay Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-gold/20 to-transparent animate-scan" />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>

            {/* Reflection/Glare */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent rounded-[40px] pointer-events-none z-30" />
        </div>
    );
}
