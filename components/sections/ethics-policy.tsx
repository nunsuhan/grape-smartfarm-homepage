'use client';

import { motion } from 'framer-motion';
import { Container } from '../ui/container';
import { Section } from '../ui/section';
import { ShieldCheck, Lock, ArrowRightLeft, HeartHandshake } from 'lucide-react';

const principles = [
    {
        icon: ShieldCheck,
        title: '원칙 1. 농민 중심의 데이터 소유권',
        description: '데이터의 주인은 농민입니다. FarmSense는 농민의 동의 없이 데이터를 제3자에게 판매하거나 독점하지 않습니다.',
        color: 'text-secondary-green',
        bg: 'bg-secondary-green/10',
        hover: 'group-hover:bg-secondary-green/20'
    },
    {
        icon: Lock,
        title: '원칙 2. 철저한 노하우 보호(비식별화)',
        description: '선도농가의 핵심 재배 레시피는 통계적 수치로 보호됩니다. 개인의 노하우가 그대로 유출되지 않도록 기술적 완충 지대를 운영합니다.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        hover: 'group-hover:bg-blue-400/20'
    },
    {
        icon: ArrowRightLeft,
        title: '원칙 3. 언제든 떠날 수 있는 자유(이동권)',
        description: '농민이 원할 때 언제든 데이터를 추출하여 타 플랫폼으로 이전할 수 있는 \'데이터 이동권\'을 보장합니다.',
        color: 'text-blue-400',
        bg: 'bg-blue-400/10',
        hover: 'group-hover:bg-blue-400/20'
    },
    {
        icon: HeartHandshake,
        title: '원칙 4. 데이터 로열티 환원',
        description: '공유된 데이터가 가치를 창출할 때, 그 수익을 데이터 생성자인 농민에게 정당하게 되돌려 드립니다.',
        color: 'text-secondary-green',
        bg: 'bg-secondary-green/10',
        hover: 'group-hover:bg-secondary-green/20'
    }
];

export function EthicsPolicy() {
    return (
        <Section className="bg-neutral-900 border-y border-white/10 relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-secondary-gold font-mono text-sm tracking-widest uppercase mb-3">
                        Corporate Ethics & Data Policy
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
                        기업 윤리 및 데이터 이용 정책
                    </h3>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {principles.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 p-6 rounded-lg hover:bg-white/10 transition-colors group"
                        >
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors ${item.bg} ${item.hover}`}>
                                <item.icon className={`w-6 h-6 ${item.color}`} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-3 min-h-[56px] flex items-center">
                                {item.title}
                            </h4>
                            <p className="text-neutral-cream/70 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
