import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '10px',
            transform: 'rotate(-5deg)',
          }}
        >
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>😊</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>🎉</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>👍</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>❤️</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>🤔</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>🌟</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>🚀</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>🔥</div>
          <div style={{ fontSize: '60px', background: 'rgba(255, 255, 255, 0.2)', borderRadius: '12px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>✨</div>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            background: 'white',
            borderRadius: '20px',
            padding: '10px 15px',
            fontSize: '40px',
          }}
        >
          💬 🙋‍♂️ 🤖
        </div>
      </div>
    ),
    {
      width: 400,
      height: 300,
    },
  );
} 