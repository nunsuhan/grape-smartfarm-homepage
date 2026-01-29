'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion } from 'framer-motion';
import { Database, Server, Lock, CheckCircle, AlertCircle } from 'lucide-react';

export default function ApiGuidePage() {
    return (
        <main className="min-h-screen bg-neutral-900 pt-20">
            <Section className="py-20 bg-neutral-900 border-b border-white/5">
                <Container className="max-w-4xl">
                    <span className="text-secondary-gold font-mono text-sm uppercase">Version 1.2.0 (Latest)</span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mt-4">
                        API Integration Guide
                    </h1>
                    <p className="text-neutral-400 mt-4 text-lg">
                        써드파티 센서 및 컨트롤러를 FarmSense 클라우드에 연동하기 위한 RESTful API 명세입니다.
                    </p>
                </Container>
            </Section>

            <Section className="py-12">
                <Container className="max-w-4xl space-y-16">

                    {/* 1. Endpoint & Auth */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Server className="w-6 h-6 text-blue-400" /> Endpoint Information
                        </h2>
                        <div className="bg-[#111] p-6 rounded-xl border border-white/10 space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="bg-green-500/20 text-green-400 font-bold px-3 py-1 rounded text-sm">POST</span>
                                <code className="text-white font-mono bg-white/5 px-4 py-2 rounded flex-1">
                                    https://api.farmsense.kr/api/w1/sensors/telemetry
                                </code>
                            </div>
                            <div className="flex bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20 text-sm md:text-base">
                                <Lock className="w-5 h-5 text-yellow-500 shrink-0 mr-3" />
                                <div className="text-neutral-300">
                                    <span className="text-white font-bold">Authentication Required:</span><br />
                                    Header에 <code className="bg-black/30 px-1 rounded text-yellow-200">Authorization: Bearer [DEVICE_TOKEN]</code>을 반드시 포함해야 합니다. 
                                    토큰은 '마이페이지 &gt; 기기 관리'에서 발급받을 수 있습니다.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2. Request Schema */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                            <Database className="w-6 h-6 text-purple-400" /> JSON Request Body
                        </h2>
                        <p className="text-neutral-400 mb-4">
                            데이터는 반드시 UTF-8 인코딩된 JSON 포맷이어야 합니다. `value` 키는 <strong>Float</strong> 타입을 권장합니다.
                        </p>
                        <CodeBlock
                            language="json"
                            filename="telemetry_payload.json"
                            code={`{
  "device_id": "fs-node-a101",
  "timestamp": "2026-01-23T14:30:00Z", // ISO 8601 (UTC Recommended)
  "telemetry": {
    "temperature_air": 24.5,    // Unit: Celsius
    "humidity_air": 60.2,       // Unit: %
    "soil_moisture": -15.4,     // Unit: kPa (Tensiometer)
    "soil_ec": 1.2,             // Unit: dS/m
    "battery_voltage": 3.7      // Unit: V
  },
  "metadata": {
    "firmware_version": "v1.2.0",
    "rssi": -65
  }
}`}
                        />
                    </div>

                    {/* 3. Response Codes */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Response Status Codes</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-[#1A1A2E] p-4 rounded-lg border border-green-500/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-400" />
                                    <span className="text-green-400 font-bold">201 Created</span>
                                </div>
                                <p className="text-sm text-neutral-400">데이터가 성공적으로 수신 및 저장되었습니다.</p>
                            </div>
                            <div className="bg-[#1A1A2E] p-4 rounded-lg border border-red-500/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                    <span className="text-red-400 font-bold">401 Unauthorized</span>
                                </div>
                                <p className="text-sm text-neutral-400">유효하지 않은 토큰입니다. 토큰을 재발급 받으세요.</p>
                            </div>
                            <div className="bg-[#1A1A2E] p-4 rounded-lg border border-red-500/30">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle className="w-5 h-5 text-red-400" />
                                    <span className="text-red-400 font-bold">422 Unprocessable Entity</span>
                                </div>
                                <p className="text-sm text-neutral-400">JSON 형식이 잘못되었거나 필수 필드가 누락되었습니다.</p>
                            </div>
                        </div>
                    </div>

                </Container>
            </Section>
        </main>
    );
}
