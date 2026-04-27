/**
 * 배포(Vercel)에서는 PDF 변환 파이프라인을 끄고 학습(검색·채팅 등)만 사용합니다.
 * 클라이언트 표시용: next.config.ts → NEXT_PUBLIC_PDF_CONVERT_DISABLED
 * 서버/API: VERCEL + ENABLE_PDF_CONVERT_SERVER
 */
export function isPdfConvertServerDisabled(): boolean {
  if (process.env.ENABLE_PDF_CONVERT_SERVER === '1') return false;
  return process.env.VERCEL === '1';
}

/** 빌드 시 주입되는 공개 플래그 — 클라이언트 컴포넌트에서만 사용 */
export function isPdfConvertUiDisabled(): boolean {
  return process.env.NEXT_PUBLIC_PDF_CONVERT_DISABLED === '1';
}

export const PDF_CONVERT_DISABLED_MESSAGE =
  'PDF 업로드·변환은 로컬에서 실행하세요. 이 사이트에서는 학습(검색·채팅·퀴즈)만 지원합니다.';
