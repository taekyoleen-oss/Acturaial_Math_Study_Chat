import Link from 'next/link';
import ProgressStream from '@/components/convert/ProgressStream';
import { isPdfConvertServerDisabled, PDF_CONVERT_DISABLED_MESSAGE } from '@/lib/pdf-convert-mode';

export default async function ConvertPage({ params }: { params: Promise<{ jobId: string }> }) {
  const { jobId } = await params;
  if (isPdfConvertServerDisabled()) {
    return (
      <div className="max-w-lg mx-auto px-6 py-16 text-center fade-in">
        <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>PDF 변환</p>
        <p className="text-base leading-relaxed mb-8" style={{ color: 'var(--text-primary)' }}>
          {PDF_CONVERT_DISABLED_MESSAGE}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/study"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--gradient-primary)', color: '#fff' }}
          >
            학습 허브로 이동
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 rounded-xl font-semibold text-sm"
            style={{ background: 'var(--surface-1)', color: 'var(--text-secondary)', border: '1px solid var(--border)' }}
          >
            홈으로
          </Link>
        </div>
        <p className="text-xs mt-8" style={{ color: 'var(--text-disabled)' }}>
          작업 ID: {jobId}
        </p>
      </div>
    );
  }
  return <ProgressStream jobId={jobId} />;
}
