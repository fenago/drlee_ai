import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'DrLee.ai - Master AI from First Principles';
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
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#0F172A',
          padding: '80px 100px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
          }}
        />

        {/* Main content */}
        <div style={{ display: 'flex', flexDirection: 'column', position: 'relative', zIndex: 1 }}>
          {/* Logo/Brand */}
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
            <span
              style={{
                fontSize: '120px',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #3B82F6 0%, #8B5CF6 50%, #10B981 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                letterSpacing: '-3px',
              }}
            >
              Dr Lee
            </span>
            <span
              style={{
                fontSize: '120px',
                fontWeight: 700,
                background: 'linear-gradient(90deg, #10B981 0%, #3B82F6 100%)',
                backgroundClip: 'text',
                color: 'transparent',
                marginLeft: '30px',
                letterSpacing: '5px',
              }}
            >
              AI
            </span>
          </div>

          {/* Tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p
              style={{
                fontSize: '42px',
                fontWeight: 500,
                color: '#94A3B8',
                margin: 0,
              }}
            >
              Master AI from First Principles
            </p>
            <p
              style={{
                fontSize: '32px',
                fontWeight: 400,
                color: '#64748B',
                margin: 0,
              }}
            >
              Build Frontier AI Systems · Own Your Technology · Stop Renting from APIs
            </p>
          </div>
        </div>

        {/* Feature boxes */}
        <div style={{ display: 'flex', gap: '30px', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 40px',
              backgroundColor: '#1E293B',
              border: '2px solid #3B82F6',
              borderRadius: '12px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#3B82F6',
              }}
            >
              21 Courses
            </span>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 400,
                color: '#94A3B8',
              }}
            >
              From LLMs to Production
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 40px',
              backgroundColor: '#1E293B',
              border: '2px solid #8B5CF6',
              borderRadius: '12px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#8B5CF6',
              }}
            >
              Build Not Rent
            </span>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 400,
                color: '#94A3B8',
              }}
            >
              Own Your Model Weights
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '20px 40px',
              backgroundColor: '#1E293B',
              border: '2px solid #10B981',
              borderRadius: '12px',
            }}
          >
            <span
              style={{
                fontSize: '36px',
                fontWeight: 700,
                color: '#10B981',
              }}
            >
              Elite Training
            </span>
            <span
              style={{
                fontSize: '20px',
                fontWeight: 400,
                color: '#94A3B8',
              }}
            >
              Founders & Engineers
            </span>
          </div>
        </div>

        {/* Website URL */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '100px',
            fontSize: '28px',
            fontWeight: 600,
            color: '#64748B',
          }}
        >
          drlee.ai
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
