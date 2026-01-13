import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000000',
          position: 'relative',
          fontFamily: 'serif',
        }}
      >
        {/* Floating geometric shapes */}
        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '180px',
            width: '60px',
            height: '60px',
            border: '1px solid rgba(255,255,255,0.3)',
            transform: 'rotate(15deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '200px',
            left: '280px',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.15)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '150px',
            right: '200px',
            width: '45px',
            height: '45px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.2)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '280px',
            right: '150px',
            width: '50px',
            height: '80px',
            border: '1px solid rgba(255,255,255,0.25)',
            borderRadius: '25px',
            transform: 'rotate(-10deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '200px',
            left: '150px',
            width: '45px',
            height: '70px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '22px',
            transform: 'rotate(20deg)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '150px',
            right: '250px',
            width: '40px',
            height: '40px',
            border: '1px solid rgba(255,255,255,0.15)',
            transform: 'rotate(-20deg)',
          }}
        />

        {/* Central abstract portal */}
        <div
          style={{
            width: '200px',
            height: '300px',
            background: 'linear-gradient(180deg, rgba(40,40,40,0.8) 0%, rgba(20,20,20,0.9) 50%, rgba(0,0,0,1) 100%)',
            borderRadius: '100px 100px 0 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            boxShadow: '0 0 100px rgba(255,255,255,0.05)',
          }}
        >
          {/* Inner glow */}
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.8)',
              boxShadow: '0 0 40px 20px rgba(255,255,255,0.3)',
              position: 'absolute',
              bottom: '100px',
            }}
          />
          {/* Grid lines */}
          <div
            style={{
              position: 'absolute',
              width: '150px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              bottom: '80px',
            }}
          />
          <div
            style={{
              position: 'absolute',
              width: '120px',
              height: '1px',
              backgroundColor: 'rgba(255,255,255,0.08)',
              bottom: '60px',
            }}
          />
        </div>

        {/* Work and About text */}
        <div
          style={{
            position: 'absolute',
            left: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '120px',
            color: 'white',
            fontWeight: '300',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
          }}
        >
          Work
        </div>
        <div
          style={{
            position: 'absolute',
            right: '80px',
            top: '50%',
            transform: 'translateY(-50%)',
            fontSize: '120px',
            color: 'white',
            fontWeight: '300',
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
          }}
        >
          About
        </div>

        {/* Top navbar */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
              color: 'white',
              fontWeight: '300',
              fontFamily: 'serif',
            }}
          >
            O
          </div>
          <span
            style={{
              fontSize: '18px',
              color: 'white',
              fontWeight: '400',
            }}
          >
            Omar Rageh
          </span>
        </div>
        <div
          style={{
            position: 'absolute',
            top: '40px',
            right: '60px',
            display: 'flex',
            alignItems: 'center',
            gap: '40px',
            fontSize: '14px',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          <span>Work</span>
          <span>About</span>
          <span>Contact</span>
          <div
            style={{
              padding: '8px 20px',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '20px',
              fontSize: '13px',
            }}
          >
            Inquiries ↗
          </div>
        </div>

        {/* Project card preview */}
        <div
          style={{
            position: 'absolute',
            bottom: '60px',
            right: '80px',
            width: '280px',
            backgroundColor: 'rgba(30,30,30,0.9)',
            borderRadius: '12px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <div
            style={{
              padding: '4px 12px',
              backgroundColor: 'rgba(255,255,255,0.1)',
              borderRadius: '4px',
              fontSize: '11px',
              color: 'white',
              alignSelf: 'flex-start',
            }}
          >
            NEW PROJECT
          </div>
          <div
            style={{
              width: '100%',
              height: '100px',
              backgroundColor: 'rgba(50,50,50,0.8)',
              borderRadius: '8px',
            }}
          />
          <div style={{ color: 'white', fontSize: '16px', fontWeight: '500' }}>
            Latest Work
          </div>
          <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '12px' }}>
            Web Development & Design
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '24px',
            height: '40px',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '8px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '8px',
              backgroundColor: 'rgba(255,255,255,0.5)',
              borderRadius: '2px',
            }}
          />
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
