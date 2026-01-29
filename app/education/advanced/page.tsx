'use client';

import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { motion } from 'framer-motion';
import { Globe, Server, Radio, BookOpen } from 'lucide-react';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function AdvancedSensorPage() {
    return (
        <main className="min-h-screen bg-white text-neutral-900 pt-20 font-sans">
            <Section className="py-20 bg-neutral-50/50 border-b border-neutral-200">
                <Container className="max-w-4xl">
                    <span className="text-secondary-gold font-bold tracking-wider text-sm uppercase flex items-center gap-2">
                        <Globe className="w-4 h-4 text-secondary-gold" /> Advanced Integration
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-900 mt-4 leading-tight">
                        중급/고급 사용자를 위한 연동 가이드
                    </h1>
                    <p className="text-neutral-600 mt-4 text-lg leading-relaxed">
                        LoRa, RS-485 등 산업용 통신 프로토콜을 사용하는 센서를 FarmSense 게이트웨이에 연결하거나 <br className="hidden md:block" />
                        기존에 사용 중인 타사 센서 데이터를 API로 전송하는 방법을 안내합니다.
                    </p>
                </Container>
            </Section>

            <Section className="py-12">
                <Container className="max-w-4xl">
                    <div className="space-y-12">
                        {/* 1. LoRa Configuration */}
                        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                                <Radio className="text-purple-600 w-6 h-6" />
                                LoRaWAN 게이트웨이 설정 (KR920)
                            </h2>
                            <p className="text-neutral-600 mb-6 font-light leading-relaxed">
                                FarmSense는 <strong>KR920-923MHz</strong> 주파수 대역을 표준으로 사용합니다.
                                자체 LoRa 게이트웨이를 구축하려면 <code>ttn-mapper</code> 설정을 아래와 같이 변경해야 합니다.
                            </p>
                            <div className="bg-neutral-900 rounded-lg overflow-hidden">
                                <CodeBlock
                                    language="json"
                                    filename="global_conf.json"
                                    code={`{
  "SX1301_conf": {
    "lorawan_public": true,
    "clksrc": 1,
    "radio_0": {
      "enable": true,
      "type": "SX1257",
      "freq": 922100000, // Korea Standard Channel 1
      "rssi_offset": -166.0,
      "tx_enable": true
    },
    "radio_1": {
      "enable": true,
      "type": "SX1257",
      "freq": 922700000, // Korea Standard Channel 4
      "rssi_offset": -166.0,
      "tx_enable": false
    }
  },
  "gateway_conf": {
    "server_address": "router.kr.thethings.network",
    "serv_port_up": 1700,
    "serv_port_down": 1700,
    "enabled": true
  }
}`}
                                />
                            </div>
                        </div>

                        {/* 2. RS-485 Modbus */}
                        <div className="bg-white border border-neutral-200 p-8 rounded-2xl shadow-sm">
                            <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-3">
                                <Server className="text-blue-600 w-6 h-6" />
                                RS-485 Modbus RTU 연동
                            </h2>
                            <p className="text-neutral-600 mb-6 font-light leading-relaxed">
                                산업용 토양 센서(SHT-10 등) 연결 시 사용할 수 있는 Python 스크립트 예제입니다.
                                <code>pymodbus</code> 라이브러리를 사용합니다.
                            </p>
                            <div className="bg-neutral-900 rounded-lg overflow-hidden">
                                <CodeBlock
                                    language="python"
                                    filename="modbus_reader.py"
                                    code={`from pymodbus.client.sync import ModbusSerialClient

def read_soil_sensor(port='/dev/ttyUSB0'):
    client = ModbusSerialClient(
        method='rtu',
        port=port,
        baudrate=9600,
        stopbits=1,
        bytesize=8,
        parity='N',
        timeout=1
    )
    
    if client.connect():
        # Read Holding Registers (Address 0x0000, Length 2)
        # SHT-10 Default: Temp(0), Humi(1)
        result = client.read_holding_registers(address=0, count=2, unit=1)
        
        if not result.isError():
            temp = result.registers[0] / 10.0
            humi = result.registers[1] / 10.0
            return {"temp": temp, "humi": humi}
            
        client.close()
    return None`}
                                />
                            </div>
                        </div>

                        {/* Link to API */}
                        <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div>
                                <h3 className="text-neutral-900 font-bold text-lg mb-1">데이터 전송 준비가 되셨나요?</h3>
                                <p className="text-sm text-neutral-500">수집한 데이터를 FarmSense 클라우드로 보내는 방법을 확인하세요.</p>
                            </div>
                            <Link href="/developers/api-guide" className="bg-neutral-900 text-white px-6 py-3 rounded-full font-bold hover:bg-neutral-700 transition-colors">
                                API 문서 보기
                            </Link>
                        </div>
                    </div>

                    <TechnologyBlogFooter />
                </Container>
            </Section>
        </main>
    );
}
