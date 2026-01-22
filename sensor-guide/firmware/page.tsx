'use client';

import Link from 'next/link';

export default function FirmwarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-indigo-900">
      <header className="bg-purple-900/50 backdrop-blur-sm border-b border-purple-700">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">🍇 FarmSense</Link>
          <nav className="flex gap-6">
            <Link href="/" className="text-purple-200 hover:text-white">홈</Link>
            <Link href="/sensor-guide" className="text-white font-semibold">센서 가이드</Link>
          </nav>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-4">
        <nav className="text-purple-300 text-sm">
          <Link href="/sensor-guide" className="hover:text-white">센서 가이드</Link>
          <span className="mx-2">/</span>
          <span className="text-white">펌웨어 설치</span>
        </nav>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-8">💻 펌웨어 설치</h1>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">1. Arduino IDE 설정</h2>
          <div className="space-y-6">
            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">Step 1: Arduino IDE 설치</h3>
              <p className="text-purple-200 mb-4">
                <a href="https://www.arduino.cc/en/software" target="_blank" className="text-blue-400 hover:underline">Arduino IDE 다운로드</a>
              </p>
            </div>

            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">Step 2: ESP32 보드 추가</h3>
              <p className="text-purple-200 mb-3">File → Preferences → Additional Board Manager URLs:</p>
              <div className="bg-gray-900 rounded-lg p-4">
                <code className="text-green-400 text-sm break-all">
                  https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json
                </code>
              </div>
            </div>

            <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
              <h3 className="text-lg font-semibold text-white mb-4">Step 3: 라이브러리 설치</h3>
              <ul className="text-purple-200 space-y-2">
                <li>✅ LoRa by Sandeep Mistry</li>
                <li>✅ Adafruit SHT31 Library</li>
                <li>✅ ArduinoJson</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">2. 센서 노드 코드</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">sensor_node.ino</h3>
              <a href="https://github.com/nunsuhan/farmsense-sensor" target="_blank" className="text-blue-400 hover:underline text-sm">GitHub →</a>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto max-h-80">
              <pre className="text-green-400 text-sm">{`#include <LoRa.h>
#include <Wire.h>
#include "Adafruit_SHT31.h"

#define SENSOR_ID "SENSOR001"
#define LORA_FREQUENCY 922.1E6
#define SLEEP_MINUTES 10
#define SOIL_PIN 36

Adafruit_SHT31 sht31 = Adafruit_SHT31();

void setup() {
  Serial.begin(115200);
  Wire.begin(41, 42);
  sht31.begin(0x44);
  
  SPI.begin(9, 11, 10, 8);
  LoRa.setPins(8, 12, 14);
  LoRa.begin(LORA_FREQUENCY);
  LoRa.setTxPower(17);
}

void loop() {
  float temp = sht31.readTemperature();
  float humi = sht31.readHumidity();
  int soil = map(analogRead(SOIL_PIN), 4095, 1500, 0, 100);
  
  String packet = String(SENSOR_ID) + "," + 
                  String(temp, 1) + "," + 
                  String(humi, 0) + "," + 
                  String(soil);
  
  LoRa.beginPacket();
  LoRa.print(packet);
  LoRa.endPacket();
  
  esp_sleep_enable_timer_wakeup(SLEEP_MINUTES * 60 * 1000000ULL);
  esp_deep_sleep_start();
}`}</pre>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">3. 게이트웨이 코드 (Python)</h2>
          <div className="bg-purple-800/50 rounded-xl p-6 border border-purple-600">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-white">gateway.py</h3>
              <a href="https://github.com/nunsuhan/farmsense-sensor" target="_blank" className="text-blue-400 hover:underline text-sm">GitHub →</a>
            </div>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto max-h-80">
              <pre className="text-green-400 text-sm">{`#!/usr/bin/env python3
import time
import requests
from SX127x.LoRa import *

FARMSENSE_API = "https://farmsense.kr/api/v1/sensor/data"
FARM_API_KEY = "YOUR_API_KEY"

class Gateway(LoRa):
    def on_rx_done(self):
        payload = self.read_payload(nocheck=True)
        data = bytes(payload).decode('utf-8')
        parts = data.split(',')
        
        sensor_data = {
            "sensor_id": parts[0],
            "temperature": float(parts[1]),
            "humidity": float(parts[2]),
            "soil_moisture": int(parts[3])
        }
        
        requests.post(FARMSENSE_API, 
                      headers={"Authorization": f"Bearer {FARM_API_KEY}"},
                      json=sensor_data)
        self.set_mode(MODE.RXCONT)

gateway = Gateway()
gateway.set_freq(922.1)
gateway.set_mode(MODE.RXCONT)

while True:
    time.sleep(0.5)`}</pre>
            </div>
          </div>
        </section>

        <div className="flex justify-between items-center pt-8 border-t border-purple-700">
          <Link href="/sensor-guide/hardware" className="text-purple-300 hover:text-white">← 이전: 하드웨어 구성</Link>
          <Link href="/sensor-guide/api" className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-lg">다음: API 문서 →</Link>
        </div>
      </main>

      <footer className="py-8 px-4 border-t border-purple-700 mt-16">
        <div className="max-w-6xl mx-auto text-center text-purple-300">
          <p>© 2025 FarmSense</p>
        </div>
      </footer>
    </div>
  );
}
