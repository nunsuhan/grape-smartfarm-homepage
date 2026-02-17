'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import Link from 'next/link';

const faqData: Record<string, { title: string; icon: string; items: { q: string; a: string }[] }> = {
    service: {
        title: "서비스 소개",
        icon: "Info",
        items: [
            {
                q: "FarmSense가 뭔가요?",
                a: "포도 농사 전용 AI 서비스입니다. 사진으로 병해 진단(3초), AI 상담, 날씨 기반 병해 예측, 센서 모니터링을 제공합니다. 24시간 포도 전문가가 주머니에 있는 셈이에요."
            },
            {
                q: "어떤 농가에서 사용할 수 있나요?",
                a: "비가림하우스, 연동하우스, 단동/다동 시설, 노지 재배 모두 지원합니다. 샤인머스캣, 캠벨얼리, 거봉 등 모든 포도 품종에서 사용 가능합니다."
            },
            {
                q: "기존 자동화 시스템과 뭐가 다른가요?",
                a: "기존 시스템은 시설 '제어'에 집중하지만, FarmSense는 데이터 '분석'과 '의사결정 지원'에 집중합니다. 제어는 농가가, 판단은 AI가 도와드립니다."
            },
            {
                q: "포도 외 다른 작물도 되나요?",
                a: "현재는 포도 전용입니다. 향후 참외, 딸기, 사과 등으로 확장 예정입니다."
            },
            {
                q: "농업기술센터랑 뭐가 다른가요?",
                a: "기술센터는 평일 9-18시 운영되지만, FarmSense는 24시간 즉시 응답합니다. 4,600편 논문 기반으로 답변하며, 앱에서 바로 병해 진단이 가능합니다."
            }
        ]
    },
    pricing: {
        title: "가격/요금제",
        icon: "CreditCard",
        items: [
            {
                q: "현재 서비스 이용료는 얼마인가요?",
                a: "현재 FarmSense는 베타 버전으로 운영되고 있습니다. 정식 출시 전까지 모든 기능을 무료로 체험하실 수 있으며, 구체적인 가격 정책은 추후 공지될 예정입니다."
            }
        ]
    },
    account: {
        title: "회원가입/계정",
        icon: "User",
        items: [
            {
                q: "회원가입은 어떻게 하나요?",
                a: "앱 다운로드 후 휴대폰 번호 인증, 농장 정보 입력만 하면 됩니다. 약 3분이면 완료됩니다."
            },
            {
                q: "가족이나 직원도 같이 쓸 수 있나요?",
                a: "기본은 1계정 1기기입니다. 가족/직원 추가는 별도 계정이 필요하며, 팜 멤버 기능은 준비 중입니다."
            },
            {
                q: "휴대폰을 바꾸면 데이터는 어떻게 되나요?",
                a: "모든 데이터는 클라우드에 저장됩니다. 새 휴대폰에서 로그인하면 자동 복원됩니다."
            },
            {
                q: "회원 탈퇴는 어떻게 하나요?",
                a: "앱 → 설정 → 회원 탈퇴, 또는 artmer3061@gmail.com으로 요청하시면 됩니다. 탈퇴 시 모든 데이터가 삭제됩니다."
            },
            {
                q: "농장 주소와 자택 주소가 다른데 어떻게 하나요?",
                a: "농장 주소를 입력해주세요! 자택 주소를 입력하면 기상 예보가 맞지 않아 PMI 예측이 부정확해집니다. 농장이 여러 곳이면 '주 농장' 주소를 입력하고, 추가 농장은 나중에 등록할 수 있습니다."
            }
        ]
    },
    diagnosis: {
        title: "AI 병해 진단",
        icon: "Camera",
        items: [
            {
                q: "AI 진단이 정확한가요?",
                a: "FarmSense AI 진단은 정확한 병명 판정이 아닌, 이상 징후의 조기 발견에 목적이 있습니다. 이상이 감지되면 전문가 상담이나 기술센터 확인을 권장합니다."
            },
            {
                q: "어떤 병해를 진단할 수 있나요?",
                a: "현재 10종입니다. 탄저, 노균, 흑두, 흑부, 잎마름, 축과, 일소, 약해, 갈색무늬병, 새눈무늬병을 감지합니다."
            },
            {
                q: "사진을 어떻게 찍어야 하나요?",
                a: "자연광 아래서 병반 부위를 20~30cm 거리에서 흔들리지 않게 찍어주세요. 잎 앞면과 뒷면 각각 촬영하면 더 정확합니다. 역광이나 흐릿한 사진은 피해주세요."
            },
            {
                q: "오진하면 어떻게 하나요?",
                a: "AI 진단은 참고용입니다. 확실하지 않으면 여러 장 촬영해서 재진단하거나 RAG 상담으로 추가 확인하세요. 심각한 경우 농업기술센터 방문을 권장합니다."
            },
            {
                q: "캠벨, 거봉도 진단 되나요?",
                a: "네! 포도 전 품종 지원합니다. 샤인머스캣, 캠벨얼리, 거봉, MBA, 청수 등 모든 품종에서 사용 가능합니다."
            },
            {
                q: "진단 결과와 실제 발생을 비교할 수 있나요?",
                a: "네, 가능합니다. 예측값과 실제 발생 기록을 비교할 수 있고, 오진 시 피드백하면 모델 개선에 활용됩니다."
            }
        ]
    },
    rag: {
        title: "RAG 상담",
        icon: "MessageCircle",
        items: [
            {
                q: "뭘 물어볼 수 있나요?",
                a: "포도 농사 관련 뭐든지요! 적심 시기, 농약 추천, GA 처리 농도, 당도 높이는 법, 열과 방지법 등 전문적인 답변을 드립니다."
            },
            {
                q: "답변이 정확한가요?",
                a: "90% 정확도입니다. 4,600편 연구 논문과 287,000개 지식 조각을 학습했고, 모든 답변에 출처를 표시합니다. 모르는 건 모른다고 솔직히 답변해요."
            },
            {
                q: "농약 추천도 해주나요?",
                a: "네! 국가농약관리시스템(NCPMS)과 연동하여 등록된 농약만 추천하고, 안전사용기준과 살포량도 안내합니다."
            },
            {
                q: "답변이 마음에 안 들면?",
                a: "재질문하거나 다른 표현으로 물어보세요. 👎 버튼으로 피드백하면 개선에 반영됩니다. 심각한 경우 기술센터 안내도 해드립니다."
            },
            {
                q: "예전 질문을 다시 볼 수 있나요?",
                a: "네! 상담 기록이 무제한 저장되고, 검색 기능으로 과거 질문을 찾을 수 있습니다. 중요 답변은 즐겨찾기도 가능합니다."
            }
        ]
    },
    pmi: {
        title: "PMI 병해 예측",
        icon: "CloudRain",
        items: [
            {
                q: "PMI가 뭔가요?",
                a: "Plasmopora Model for Infection의 약자로, 기상·센서 데이터를 분석해 병해 발생 위험도를 0~100점으로 표시합니다. 70점 이상이면 예방제 살포를 권장해요."
            },
            {
                q: "어떤 병해를 예측하나요?",
                a: "노균병(84%), 흰가루병(81%), 탄저병(78%), 잿빛곰팡이병(76%), 새눈무늬병(74%) 등 주요 병해 5종을 예측합니다."
            },
            {
                q: "예측이 정확한가요?",
                a: "82% 정확도입니다. 유럽 포도 병해 예측 모델을 한국 기후에 맞게 보정했고, 기상청 동네예보 API와 실시간 연동됩니다."
            },
            {
                q: "알림은 어떻게 오나요?",
                a: "PMI 85점 이상은 즉시 긴급 알림, 70-84점은 당일 오전 경고, 50-69점은 전날 저녁 주의 알림이 발송됩니다."
            },
            {
                q: "농약 살포를 자동으로 결정해주나요?",
                a: "아닙니다. 앱은 살포 '권장'만 제공합니다. 실제 살포 여부와 시점은 농가가 최종 결정합니다."
            }
        ]
    },
    sensor: {
        title: "센서/스마트팜",
        icon: "Cpu",
        items: [
            {
                q: "센서가 꼭 있어야 하나요?",
                a: "아니요! 센서 없이도 AI 진단, RAG 상담은 모두 사용 가능합니다. 센서가 있으면 PMI 예측이 더 정밀해지고 실시간 모니터링이 가능해집니다."
            },
            {
                q: "어떤 센서를 지원하나요?",
                a: "온도/습도, CO₂, 토양수분, 토양EC/pH, 일사량, 잎젖음, 풍속/풍향 센서를 지원합니다. Modbus, MQTT, LoRa, HTTP 프로토콜과 호환됩니다."
            },
            {
                q: "기존 센서도 연동 되나요?",
                a: "표준 통신(Modbus, MQTT, LoRa 등)을 사용하는 센서는 대부분 연동 가능합니다. 사전 호환성 확인을 위해 문의해주세요."
            },
            {
                q: "센서 설치는 직접 해야 하나요?",
                a: "기본적으로 현장 설치 가이드를 제공하며, 협력 설치 서비스(유료)도 선택할 수 있습니다. 설치 후 앱에서 자동 인식·연결됩니다."
            },
            {
                q: "인터넷이 안 되는 하우스에서도 되나요?",
                a: "가능합니다. 현장 게이트웨이가 로컬 저장·분석을 수행하고, 통신 복구 시 자동으로 서버와 동기화됩니다."
            },
            {
                q: "여러 동(하우스)을 한 번에 관리할 수 있나요?",
                a: "가능합니다. 전체 농장 요약 화면과 하우스별 상세 화면을 동시에 제공합니다."
            },
            {
                q: "센서 값이 이상할 때는?",
                a: "앱에서 자동 이상 감지 알림이 오고, 점검 가이드가 제공됩니다. 해당 센서 데이터는 제외하고 분석이 진행됩니다."
            }
        ]
    },
    schedule: {
        title: "농사일정/영농일지",
        icon: "Calendar",
        items: [
            {
                q: "농사일정이 자동으로 만들어지나요?",
                a: "네! 생육 단계와 누적온도(GDD)를 기반으로 관수, 방제, 시비, 수확 일정이 자동 생성됩니다. 농가가 직접 수정도 가능해요."
            },
            {
                q: "일정을 수정할 수 있나요?",
                a: "물론입니다. 자동 일정은 권장안이며, 농가가 직접 날짜, 작업 내용, 메모를 자유롭게 편집할 수 있습니다."
            },
            {
                q: "작업 알림은 어떻게 오나요?",
                a: "예정 작업은 1일 전과 당일 오전에, 긴급 상황은 즉시 푸시 알림으로 발송됩니다. 알림 켜기/끄기 설정도 가능합니다."
            },
            {
                q: "과거 작업 기록을 볼 수 있나요?",
                a: "네! 모든 살포·관수·작업 이력이 자동 저장되며 날짜별, 하우스별로 조회할 수 있습니다. 엑셀 내보내기도 가능합니다."
            },
            {
                q: "영농일지 작성은 어떻게 하나요?",
                a: "앱에서 '일지 작성' 버튼 → 날짜, 작업 내용 입력 → 사진 첨부(선택) → 저장. 작업 내용, 사용 자재, 작업 시간, 사진, 메모 등을 기록할 수 있습니다."
            },
            {
                q: "살포 기록은 자동으로 남나요?",
                a: "반자동입니다. PMI 알림 → 방제 권장 → '살포 완료' 버튼 누르면 날짜, 약제명, 희석 배수, 살포량이 자동 기록됩니다."
            }
        ]
    },
    data: {
        title: "데이터 신뢰성",
        icon: "Shield",
        items: [
            {
                q: "예측이 항상 맞나요?",
                a: "100% 예측은 불가능합니다. 하지만 실측 데이터와 과거 이력을 기반으로 위험을 조기에 알려 손실을 최소화하는 데 목적이 있습니다."
            },
            {
                q: "우리 농장 데이터만 분석되나요?",
                a: "기본적으로 해당 농장 센서 데이터가 우선 사용됩니다. 보조적으로 지역 기상 정보가 활용되며, 다른 농가 데이터와 절대 혼합되지 않습니다."
            },
            {
                q: "지역별로 다르게 분석하나요?",
                a: "네! 농장 위치(GPS) 등록 시 해당 지역 기상청 예보와 연동되어 지역 특성이 반영된 분석이 제공됩니다."
            },
            {
                q: "AI가 추천한 농약을 믿어도 되나요?",
                a: "NCPMS 등록 농약만 추천하지만, 최종 판단은 농가가 하셔야 합니다. AI 추천은 참고용이며, 의심되면 농업기술센터에 확인하세요."
            }
        ]
    },
    usage: {
        title: "앱 사용법",
        icon: "Smartphone",
        items: [
            {
                q: "스마트폰이 구형인데 되나요?",
                a: "대부분 됩니다! Android 8.0(2017년~) 또는 iOS 13.0(iPhone 6s~) 이상이면 사용 가능합니다."
            },
            {
                q: "사용법이 어렵지 않나요?",
                a: "아주 쉽습니다! 병해 진단은 사진만 찍으면 되고, 상담은 채팅으로 질문하면 됩니다. 숫자보다 색상과 아이콘 중심으로 설계했어요."
            },
            {
                q: "데이터 요금 많이 나가나요?",
                a: "거의 안 나갑니다. 한 달 사용량이 약 1GB 이하이며, LTE/5G로 충분히 사용 가능합니다."
            },
            {
                q: "사용법 교육 받을 수 있나요?",
                a: "네! 앱 내 튜토리얼, 유튜브 사용 가이드, 1:1 원격 교육(화상통화 30분), 현장 교육(김천 지역, 협의)을 제공합니다."
            },
            {
                q: "성장일기 사진 촬영 시 위치 권한을 허용해야 하나요?",
                a: "네, 반드시 허용해주세요! FarmSense는 농장을 여러 섹터(구역)로 나누어 관리합니다. 사진 촬영 시 GPS 위치가 자동으로 기록되어 '어느 구역에서 찍은 사진인지' 자동 분류됩니다. 처음 앱 설치 시 '위치 항상 허용' 또는 '앱 사용 중 허용'을 선택해주세요. 위치 권한이 없으면 섹터별 기록이 불가능합니다."
            },
            {
                q: "농장 주소는 왜 정확하게 입력해야 하나요?",
                a: "농장 주소(GPS 좌표)는 3가지 핵심 기능에 사용됩니다: 1) 해당 위치의 기상청 동네예보 연동 (PMI 병해 예측), 2) 섹터별 사진 자동 분류 (성장일기), 3) 지역 맞춤 재배 정보 제공. 자택 주소가 아닌 실제 농장/하우스 주소를 입력해주세요. 주소가 부정확하면 기상 예보가 맞지 않아 PMI 예측 정확도가 떨어집니다."
            },
            {
                q: "농장 설정을 왜 세밀하게 해야 하나요?",
                a: "AI가 정확한 분석을 하려면 여러분 농장의 '맥락'을 알아야 합니다. 설정이 세밀할수록: 1) 품종별 맞춤 재배 일정 제공, 2) 재배 형태(노지/비가림/시설)에 맞는 PMI 계산, 3) 수령·재식거리 기반 정확한 약량 계산, 4) 섹터별 병해 발생 추적이 가능합니다. 5분 투자해서 설정하면 1년 내내 정확한 분석을 받을 수 있습니다."
            },
            {
                q: "섹터(구역)는 어떻게 나누나요?",
                a: "농장 설정 → 섹터 관리에서 구역을 추가합니다. 예: '1동 앞쪽', '1동 뒤쪽', '2동', '노지' 등 원하는 대로 이름을 붙이세요. 섹터별로 품종, 수령, 특이사항을 따로 기록할 수 있고, 성장일기 사진도 자동으로 해당 섹터에 분류됩니다."
            },
            {
                q: "농장 섹터는 어떻게 설정하나요?",
                a: "농장 설정 → 위성지도에서 직접 그릴 수 있습니다. 지도를 탭해서 경계 포인트를 찍으면 자동으로 선이 연결됩니다. 사각형이면 4번, 복잡한 모양이면 더 많이 찍으세요. 완료하면 면적(평수)이 자동 계산되고, 섹터별로 품종/수령 등을 설정할 수 있습니다."
            },
            {
                q: "섹터를 나누면 뭐가 좋은가요?",
                a: "1) 성장일기 사진이 GPS로 자동 분류됩니다. 2) 섹터별 병해 발생 추적이 가능합니다. 3) 정확한 면적으로 농약/비료량이 자동 계산됩니다. 4) '1동 앞쪽에서 노균병 발생' 같은 기록이 남아 다음 해 예방에 도움됩니다."
            }
        ]
    },
    security: {
        title: "보안/개인정보",
        icon: "Lock",
        items: [
            {
                q: "내 농장 정보가 유출되지 않나요?",
                a: "절대 유출되지 않습니다. 개인정보보호법을 준수하고, 모든 데이터는 암호화 저장·전송됩니다. 제3자 판매는 절대 하지 않습니다."
            },
            {
                q: "다른 농가와 데이터가 섞이나요?",
                a: "없습니다. 농가·하우스 단위로 완전히 분리된 구조입니다."
            },
            {
                q: "내가 찍은 사진은 어디에 저장되나요?",
                a: "서버에 30일간 보관 후 자동 삭제됩니다. 진단 기록은 1년간 보관되며, 원하시면 즉시 삭제 요청 가능합니다."
            },
            {
                q: "데이터는 어디 서버에 저장되나요?",
                a: "국내 클라우드 서버(AWS 서울 리전)에 저장됩니다. 해외 서버 전송 없이 국내 데이터 보호법이 적용됩니다."
            }
        ]
    },
    payment: {
        title: "결제/환불",
        icon: "Wallet",
        items: [
            {
                q: "결제나 환불은 어떻게 되나요?",
                a: "현재는 무료 베타 서비스 기간이므로 결제 정보 등록이 필요 없으며, 환불 절차 또한 없습니다. 마음껏 사용해보시고 소중한 의견만 주시면 됩니다."
            }
        ]
    },
    trouble: {
        title: "문제해결",
        icon: "AlertCircle",
        items: [
            {
                q: "앱이 안 열려요",
                a: "앱 강제 종료 후 재실행, 스마트폰 재부팅, 앱 재설치를 시도해보세요. 그래도 안 되면 artmer3061@gmail.com으로 문의해주세요."
            },
            {
                q: "진단 결과가 안 나와요",
                a: "인터넷 연결을 확인하고, 사진이 너무 어둡거나 흐릿하지 않은지 확인해주세요. 다른 각도로 다시 촬영해보세요."
            },
            {
                q: "센서가 고장 나면?",
                a: "해당 센서 데이터는 제외하고 분석이 진행되며, 즉시 점검 알림이 전송됩니다. 문의: artmer3061@gmail.com"
            },
            {
                q: "전원이 꺼지면 데이터 사라지나요?",
                a: "아닙니다. 현장 장비에 로컬 저장되며, 재가동 시 자동 복구됩니다. 클라우드 백업된 데이터는 안전합니다."
            },
            {
                q: "비밀번호를 잊어버렸어요",
                a: "로그인 화면 → '비밀번호 찾기' → 이메일 입력 → 재설정 링크 발송 → 새 비밀번호 설정"
            }
        ]
    },
    support: {
        title: "고객지원",
        icon: "Headphones",
        items: [
            {
                q: "문의는 어디로 하나요?",
                a: "이메일 artmer3061@gmail.com으로 문의해주세요. 평일 24시간 내 답변드립니다. 앱 내 '문의하기'에서도 가능합니다."
            },
            {
                q: "버그/오류 신고는?",
                a: "앱 → 설정 → 문의하기 → '오류 신고'에서 화면 캡처와 함께 발생 상황을 설명해주세요. 빠른 시일 내 수정됩니다."
            },
            {
                q: "기능 제안은?",
                a: "환영합니다! 앱 내 '기능 제안'이나 이메일로 보내주세요. 좋은 아이디어는 실제로 반영됩니다."
            },
            {
                q: "조합/단체 도입 문의는?",
                a: "10농가 이상 20% 할인, 30농가 이상 30% 할인 + 현장 교육을 제공합니다. artmer3061@gmail.com으로 문의해주세요."
            }
        ]
    }
};

export default function FAQPage() {
    const [search, setSearch] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');
    const [openItems, setOpenItems] = useState<string[]>([]);

    const toggleItem = (id: string) => {
        setOpenItems(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    // 검색 필터링
    const filteredData = Object.entries(faqData).reduce((acc, [key, category]) => {
        if (activeCategory !== 'all' && key !== activeCategory) return acc;

        const filtered = category.items.filter(item =>
            item.q.toLowerCase().includes(search.toLowerCase()) ||
            item.a.toLowerCase().includes(search.toLowerCase())
        );

        if (filtered.length > 0) {
            acc[key] = { ...category, items: filtered };
        }
        return acc;
    }, {} as typeof faqData);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-neutral-black pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-6">
                    {/* 헤더 */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-white mb-4">
                            자주 묻는 질문
                        </h1>
                        <p className="text-gray-400">
                            궁금한 점을 찾아보세요
                        </p>
                    </div>

                    {/* 검색창 */}
                    <div className="relative mb-8">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-secondary-gold"
                        />
                    </div>

                    {/* 카테고리 탭 */}
                    <div className="flex flex-wrap gap-2 mb-8">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-4 py-2 rounded-full text-sm transition ${activeCategory === 'all'
                                ? 'bg-secondary-gold text-black font-bold'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            전체
                        </button>
                        {Object.entries(faqData).map(([key, cat]) => (
                            <button
                                key={key}
                                onClick={() => setActiveCategory(key)}
                                className={`px-4 py-2 rounded-full text-sm transition ${activeCategory === key
                                    ? 'bg-secondary-gold text-black font-bold'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {cat.title}
                            </button>
                        ))}
                    </div>

                    {/* FAQ 목록 */}
                    <div className="space-y-6">
                        {Object.entries(filteredData).map(([key, category]) => (
                            <div key={key} className="bg-gray-800/50 rounded-2xl p-6">
                                <h2 className="text-xl font-semibold text-secondary-gold mb-4 flex items-center gap-2">
                                    {category.title}
                                    <span className="text-sm text-gray-500">({category.items.length})</span>
                                </h2>

                                <div className="space-y-3">
                                    {category.items.map((item, i) => {
                                        const itemId = `${key}-${i}`;
                                        const isOpen = openItems.includes(itemId);

                                        return (
                                            <div
                                                key={i}
                                                className="border border-gray-700 rounded-lg overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleItem(itemId)}
                                                    className="w-full px-5 py-4 flex justify-between items-center bg-gray-800 hover:bg-gray-750 transition"
                                                >
                                                    <span className="text-left text-white font-medium">
                                                        {item.q}
                                                    </span>
                                                    {isOpen ? (
                                                        <ChevronUp className="w-5 h-5 text-secondary-gold flex-shrink-0" />
                                                    ) : (
                                                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                                    )}
                                                </button>

                                                {isOpen && (
                                                    <div className="px-5 py-4 bg-gray-900 text-gray-300 leading-relaxed">
                                                        {item.a}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 못 찾으셨나요? */}
                    <div className="mt-12 text-center p-8 bg-gray-800/50 rounded-2xl">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            찾으시는 답변이 없나요?
                        </h3>
                        <p className="text-gray-400 mb-4">
                            직접 문의해주시면 빠르게 답변드리겠습니다.
                        </p>

                        <Link
                            href="/support"
                            className="inline-block px-8 py-3 bg-secondary-gold text-black font-semibold rounded-full hover:bg-white transition"
                        >
                            문의하기
                        </Link>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
