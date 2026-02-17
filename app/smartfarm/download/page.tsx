'use client';

import { motion } from 'framer-motion';
import {
  Download,
  Smartphone,
  Shield,
  Wifi,
  Camera,
  BarChart3,
  MessageSquare,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const appFeatures = [
  {
    icon: BarChart3,
    title: '실시간 센서 모니터링',
    desc: '기온, 습도, 토양수분, 토양온도를 실시간으로 확인',
  },
  {
    icon: Camera,
    title: 'AI 병해충 진단',
    desc: '사진 한 장으로 포도 질병을 즉시 진단',
  },
  {
    icon: MessageSquare,
    title: 'AI 농업 상담',
    desc: '재배 관련 궁금한 점을 AI에게 질문',
  },
  {
    icon: Wifi,
    title: '알림 서비스',
    desc: '병해 위험, 관수 시기 등 적시 알림 수신',
  },
];

const installSteps = [
  {
    step: 1,
    title: 'APK 파일 다운로드',
    desc: '아래 다운로드 버튼을 눌러 APK 파일을 받으세요.',
    icon: Download,
  },
  {
    step: 2,
    title: '출처를 알 수 없는 앱 허용',
    desc: '설정 > 보안 > "출처를 알 수 없는 앱 설치" 를 허용해 주세요.',
    icon: Shield,
    detail: 'Android 8.0 이상: 설정 > 앱 > 특별한 앱 액세스 > 출처를 알 수 없는 앱 설치 > 브라우저 허용',
  },
  {
    step: 3,
    title: 'APK 파일 실행',
    desc: '다운로드 완료 후, 알림 바 또는 파일 관리자에서 APK 파일을 탭하세요.',
    icon: Smartphone,
  },
  {
    step: 4,
    title: '설치 완료',
    desc: '"설치" 버튼을 누르면 완료. 홈 화면에서 FarmSense 앱을 실행하세요.',
    icon: CheckCircle,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function DownloadPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div {...fadeUp} transition={{ delay: 0 }}>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/15 text-green-400 text-sm font-medium">
            <Smartphone className="w-4 h-4" />
            Android App
          </div>
          <h1 className="text-3xl font-serif font-bold text-white">
            FarmSense 앱 다운로드
          </h1>
          <p className="text-neutral-cream/60 max-w-lg mx-auto">
            스마트폰으로 언제 어디서나 내 농장을 관리하세요.
            센서 데이터 확인, AI 진단, 영농일지까지 한 번에.
          </p>
        </div>
      </motion.div>

      {/* Download Card */}
      <motion.div {...fadeUp} transition={{ delay: 0.1 }}>
        <Card className="border-green-500/20 bg-gradient-to-br from-green-500/10 to-transparent">
          <CardContent className="p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* App Icon */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shrink-0 shadow-lg shadow-green-500/20">
                <span className="text-3xl font-serif font-bold text-white">FS</span>
              </div>

              <div className="flex-1 text-center sm:text-left">
                <h2 className="text-xl font-bold text-white mb-1">FarmSense</h2>
                <p className="text-sm text-neutral-cream/50 mb-1">
                  v1.0.0 &middot; Android 7.0 이상 &middot; 약 30MB
                </p>
                <p className="text-xs text-neutral-cream/40 mb-4">
                  최종 업데이트: 2025년 2월
                </p>

                <a
                  href="/downloads/farmsense.apk"
                  download
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-600/20 text-lg"
                >
                  <Download className="w-5 h-5" />
                  APK 다운로드
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* App Features */}
      <motion.div {...fadeUp} transition={{ delay: 0.2 }}>
        <h2 className="text-lg font-bold text-white mb-4">주요 기능</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {appFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <Card key={i}>
                <CardContent className="p-4 flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-purple/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{feat.title}</p>
                    <p className="text-xs text-neutral-cream/50 mt-0.5">{feat.desc}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </motion.div>

      {/* Installation Guide */}
      <motion.div {...fadeUp} transition={{ delay: 0.3 }}>
        <h2 className="text-lg font-bold text-white mb-4">설치 방법</h2>
        <div className="space-y-3">
          {installSteps.map((step) => {
            const Icon = step.icon;
            return (
              <Card key={step.step}>
                <CardContent className="p-4 sm:p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary-gold/20 flex items-center justify-center shrink-0">
                      <span className="text-secondary-gold font-bold text-sm">{step.step}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-secondary-gold" />
                        <h3 className="font-bold text-white text-sm">{step.title}</h3>
                      </div>
                      <p className="text-sm text-neutral-cream/60">{step.desc}</p>
                      {step.detail && (
                        <div className="mt-2 p-3 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-cream/50 flex items-start gap-2">
                          <Info className="w-3.5 h-3.5 shrink-0 mt-0.5 text-blue-400" />
                          {step.detail}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </motion.div>

      {/* Notice */}
      <motion.div {...fadeUp} transition={{ delay: 0.4 }}>
        <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="space-y-2 text-sm">
              <p className="font-semibold text-amber-300">설치 전 참고사항</p>
              <ul className="space-y-1 text-neutral-cream/60">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 shrink-0 mt-1" />
                  이 앱은 Google Play 스토어가 아닌 직접 배포(APK) 방식입니다.
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 shrink-0 mt-1" />
                  설치 시 "출처를 알 수 없는 앱" 경고가 나타날 수 있으며, 이는 정상입니다.
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 shrink-0 mt-1" />
                  iOS(아이폰)는 현재 지원하지 않습니다. 추후 업데이트 예정입니다.
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-3 h-3 shrink-0 mt-1" />
                  설치 문제 발생 시 contact@farmsense.kr 로 문의해 주세요.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
