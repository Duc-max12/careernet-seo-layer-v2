export default async function Page({ params }: any) {
  const { slug } = await params;
  
  // Gọi API lấy dữ liệu thực tế của GMO từ Supabase của anh
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`, { cache: 'no-store' });
  const data = await res.json();

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      {/* Thông tin cho Google Bot - Lấy từ data.company */}
      <div style={{ background: '#f5f5f5', padding: '15px', borderRadius: '8px' }}>
        <h1>{data.company?.name || slug}</h1>
        <p>{data.company?.description}</p>
      </div>

      {/* Giao diện Careernet cho người dùng */}
      <iframe 
        src={`https://careernet.asia/cong-ty/${slug}`} 
        style={{ width: '100%', height: '800px', border: 'none', marginTop: '20px' }}
      />
    </main>
  );
}
