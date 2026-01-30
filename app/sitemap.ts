import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.farmsense.kr';

/** 공개 페이지 경로 (동적 라우트 제외) */
const staticPaths = [
    '',
    '/privacy-policy',
    '/delete-account',
    '/faq',
    '/sensor-installation-guide',
    '/support',
    '/support/ai-assistant',
    '/intelligent-logic',
    '/intelligent-logic/irrigation-water',
    '/intelligent-logic/pesticide-spray',
    '/intelligent-logic/fertilizer-application',
    '/intelligent-logic/yield-prediction',
    '/intelligent-logic/grape-cultivation',
    '/intelligent-logic/environmental-control',
    '/technology/docs',
    '/technology/camera-necessity',
    '/technology/ai-diagnosis',
    '/technology/pmi-dss',
    '/technology/rag-system',
    '/technology/data-strategy',
    '/technology/sensor-system',
    '/technology/diagnosis-guide',
    '/technology/logic',
    '/technology/logic/disease',
    '/technology/logic/fertilizer',
    '/technology/logic/grape',
    '/technology/logic/water',
    '/technology/logic/yield',
    '/developers/api-guide',
    '/education',
    '/education/beginner',
    '/education/advanced',
    '/education/environment',
    '/ai-diagnosis-why',
];

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();
    return staticPaths.map((path) => ({
        url: `${BASE_URL}${path || '/'}`,
        lastModified: now,
        changeFrequency: (path === '' || path.startsWith('/technology/docs') || path.startsWith('/intelligent-logic')) ? 'weekly' as const : 'monthly' as const,
        priority: path === '' ? 1 : path.startsWith('/technology') || path.startsWith('/intelligent-logic') ? 0.9 : 0.7,
    }));
}
