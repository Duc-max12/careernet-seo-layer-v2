import { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { slug } = await params;
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`);
  const data = await res.json();
  return {
    title: data.seo?.title || `Tuyển dụng ${slug}`,
    description: data.seo?.description || `Thông tin công ty ${slug}`,
  };
}

export default async function Page({ params }: any) {
  const { slug } = await params;
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`);
  const data = await res.json();

  return (
    <main>
      {/* 1. Phần chữ cho Google Bot (SEO) */}
      <div style={{ padding: '20px', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <h1>{data.company?.name || slug}</h1>
        <p><b>Địa chỉ:</b> {data.company?.detailed_address}</p>
        <div style={{ whiteSpace: 'pre-line', marginTop: '10px' }}>
          {data.company?.description}
        </div>
      </div>

      {/* 2. Phần giao diện chính cho người dùng */}
      <iframe 
        src={`https://careernet.asia/cong-ty/${slug}`} 
        style={{ width: '100%', height: '1000px', border: 'none' }}
      />
    </main>
  );
}
