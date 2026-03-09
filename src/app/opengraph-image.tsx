import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'QuantiFi | Strategic Accounting & Fractional CFO Services';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #1e40af 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'rgba(59, 130, 246, 0.15)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-150px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'rgba(99, 102, 241, 0.1)',
            display: 'flex',
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            position: 'relative',
          }}
        >
          {/* Brand name */}
          <div
            style={{
              fontSize: '96px',
              fontWeight: 800,
              letterSpacing: '-2px',
              display: 'flex',
            }}
          >
            <span style={{ color: '#ffffff' }}>Quanti</span>
            <span style={{ color: '#3b82f6' }}>Fi</span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: '120px',
              height: '4px',
              background: 'linear-gradient(90deg, #3b82f6, #6366f1)',
              borderRadius: '2px',
              display: 'flex',
            }}
          />

          {/* Tagline */}
          <div
            style={{
              fontSize: '32px',
              fontWeight: 600,
              color: '#94a3b8',
              textAlign: 'center',
              maxWidth: '800px',
              lineHeight: 1.4,
              display: 'flex',
            }}
          >
            Strategic Accounting & Fractional CFO Services
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: '22px',
              fontWeight: 500,
              color: '#64748b',
              marginTop: '16px',
              display: 'flex',
            }}
          >
            qfisol.com
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
