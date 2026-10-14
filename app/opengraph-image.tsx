import { ImageResponse } from 'next/og';
export const alt = 'XD Finance — Moedas, cripto e mercado brasileiro';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 90,
        background: '#100c18',
        color: '#f4eeff',
        fontFamily: 'sans-serif',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: 28,
          color: '#b388ff',
          marginBottom: 32,
        }}
      >
        XD FINANCE / HEXED PLANS
      </div>
      <div style={{ display: 'flex', fontSize: 76, lineHeight: 1.1 }}>
        Seu dinheiro. Seu mundo.
      </div>
      <div style={{ display: 'flex', fontSize: 76, color: '#b388ff' }}>
        Um novo olhar.
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 46,
          fontSize: 24,
          color: '#ac9bbd',
        }}
      >
        Moedas · Cripto · Mercado brasileiro
      </div>
      <div
        style={{
          display: 'flex',
          marginTop: 22,
          fontSize: 18,
          color: '#ac9bbd',
        }}
      >
        Criado por David Xavier
      </div>
    </div>,
    size,
  );
}
