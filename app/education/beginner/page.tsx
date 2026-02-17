'use client';

import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CodeBlock } from '@/components/ui/code-block';
import { Brain, PlayCircle, FileText, Download, Terminal, Wifi } from 'lucide-react';
import { TechnologyBlogFooter } from '@/components/technology-blog-footer';

export default function BeginnerSensorPage() {
    return (
        <main className="min-h-screen bg-neutral-black text-neutral-cream pt-20 font-sans">
            <div className="border-b border-white/10 bg-white/5">
                <Container className="max-w-5xl py-20">
                    <div className="space-y-6">
                        <div className="flex items-center gap-2 text-green-400 font-bold tracking-wide text-sm uppercase">
                            <span className="w-2 h-2 rounded-full bg-green-600"></span>
                            DIY Sensor Course
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                            입문자를 위한 ESP32 센서 만들기
                        </h1>
                        <p className="text-xl text-neutral-cream/70 leading-relaxed font-serif">
                            1만원짜리 보드(ESP32)와 온습도 센서(DHT22)로 나만의 스마트팜 센서를 만들어보세요.
                            <br className="hidden md:block" />
                            복잡한 코딩 없이, '복사'해서 '붙여넣기'하면 끝납니다.
                        </p>
                    </div>
                </Container>
            </div>

            <Container className="max-w-5xl py-12">
                <div className="space-y-12">
                    {/* Video/Slides Area - styled for White Paper mode */}
                    <div className="bg-white/5 border border-white/10 rounded-2xl shadow-sm overflow-hidden">
                        <div className="p-1 bg-white/10 border-b border-white/10">
                            {/* Mock Browser/Player Header */}
                            <div className="flex gap-1.5 px-3 py-2">
                                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            </div>
                        </div>

                        <div className="p-6 md:p-8">
                            <div className="aspect-video bg-neutral-900 rounded-xl relative overflow-hidden group shadow-inner">
                                {/* Placeholder for video thumb */}
                                <div className="absolute inset-0 bg-neutral-800 flex items-center justify-center">
                                    <PlayCircle className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <span className="text-white font-medium text-lg">Lecture 01: ESP32 기초와 와이파이 설정</span>
                                </div>
                            </div>

                            <div className="mt-6 flex flex-col md:flex-row gap-4 justify-between items-center">
                                <div className="flex items-center gap-3">
                                    <div className="bg-red-500/15 p-2 rounded-lg">
                                        <FileText className="w-6 h-6 text-red-400" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white">강의 자료 PDF</div>
                                        <div className="text-xs text-neutral-cream/60">회로도 및 라이브러리 가이드 (v1.2)</div>
                                    </div>
                                </div>
                                <button className="w-full md:w-auto px-6 py-3 bg-neutral-900 text-white rounded-lg hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 font-medium">
                                    <Download className="w-4 h-4" /> 자료 다운로드
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                <Terminal className="w-5 h-5 text-secondary-gold" />
                            </div>
                            <h2 className="text-2xl font-bold text-white">
                                펌웨어 전체 코드 (Copy & Paste)
                            </h2>
                        </div>
                        <div className="prose prose-invert">
                            <p>
                                아래 코드는 DHT22 센서 값을 읽어 FarmSense 서버로 전송하는 전체 코드입니다.
                                <code>SSID</code>와 <code>PASSWORD</code> 부분만 내 농장의 와이파이 정보로 수정하세요.
                            </p>
                        </div>

                        <div className="bg-neutral-900 rounded-xl overflow-hidden shadow-2xl">
                            <CodeBlock
                                language="cpp"
                                filename="FarmSense_ESP32_Basic.ino"
                                code={`#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>

// 1. 와이파이 설정 (이 부분만 수정하세요)
const char* ssid = "MY_FARM_WIFI";
const char* password = "wifi_password_1234";

// 2. 센서 설정
#define DHTPIN 4
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);

// 3. 서버 설정
const char* serverUrl = "https://api.farmsense.kr/api/sensor-data/ingest/";
const char* apiKey = "YOUR_DEVICE_TOKEN"; 

void setup() {
  Serial.begin(115200);
  dht.begin();
  
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  Serial.println("Connected to WiFi");
}

void loop() {
  float h = dht.readHumidity();
  float t = dht.readTemperature();

  if (isnan(h) || isnan(t)) {
    Serial.println("Failed to read from DHT sensor!");
    return;
  }

  if(WiFi.status() == WL_CONNECTED){
    HTTPClient http;
    http.begin(serverUrl);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("Authorization", String("Bearer ") + apiKey);
    
    // JSON 데이터 생성
    String jsonPayload = String("{\\"temperature\\":") + t + 
                         String(",\\"humidity\\":") + h + "}";
    
    int httpResponseCode = http.POST(jsonPayload);
    
    if(httpResponseCode > 0){
      String response = http.getString();
      Serial.println(httpResponseCode);
      Serial.println(response);
    }
    http.end();
  }
  
  // 10분마다 전송
  delay(600000);
}`}
                            />
                        </div>
                    </div>
                </div>

                <TechnologyBlogFooter />
            </Container>
        </main>
    );
}
