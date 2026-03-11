'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X } from 'lucide-react';

export function TrialPopup() {
    const [visible, setVisible] = useState(false);
    const [hideToday, setHideToday] = useState(false);

    useEffect(() => {
        const hidden = document.cookie.split(';').some(c => c.trim().startsWith('trial_popup_hidden='));
        if (!hidden) setVisible(true);
    }, []);

    const close = () => {
        if (hideToday) {
            const expires = new Date();
            expires.setHours(23, 59, 59, 0);
            document.cookie = `trial_popup_hidden=1; expires=${expires.toUTCString()}; path=/`;
        }
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            {/* 배경 오버레이 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={close} />

            {/* 팝업 */}
            <div className="relative bg-[#0f1a0f] border border-green-500/30 rounded-2xl shadow-2xl shadow-green-500/10 w-full max-w-sm p-6 text-white">
                {/* 닫기 버튼 */}
                <button
                    onClick={close}
                    className="absolute top-4 right-4 p-1 text-white/40 hover:text-white transition-colors"
                    aria-label="닫기"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* 내용 */}
                <div className="text-center space-y-4">
                    <div className="text-3xl">🎉</div>
                    <h2 className="text-xl font-extrabold text-white leading-tight">
                        시범 농가 50% 할인 모집
                    </h2>
                    <div className="space-y-1.5 text-sm text-white/70">
                        <p>센서 전 제품 <strong className="text-green-400">50% 할인</strong> + 설치비 무료</p>
                        <p>10농가 · 지역별 선정</p>
                    </div>

                    {/* 버튼 */}
                    <div className="flex gap-3 pt-2">
                        <Link
                            href="/services"
                            onClick={close}
                            className="flex-1 py-2.5 rounded-xl border border-white/20 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors text-center"
                        >
                            자세히 보기
                        </Link>
                        <Link
                            href="/trial"
                            onClick={close}
                            className="flex-1 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-bold text-sm transition-colors text-center"
                        >
                            신청하기
                        </Link>
                    </div>

                    {/* 오늘 하루 안 보기 */}
                    <label className="flex items-center justify-center gap-2 text-xs text-white/40 cursor-pointer select-none">
                        <input
                            type="checkbox"
                            checked={hideToday}
                            onChange={e => setHideToday(e.target.checked)}
                            className="w-3.5 h-3.5 accent-green-500"
                        />
                        오늘 하루 안 보기
                    </label>
                </div>
            </div>
        </div>
    );
}
