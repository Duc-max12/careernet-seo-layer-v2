export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // Gọi API lấy dữ liệu thực tế của GMO
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`, { cache: 'no-store' });
  const data = await res.json();

  return (
    <main style={{ fontFamily: 'sans-serif' }}>
      {/* Phần Text chuẩn SEO hiện lên đầu trang */}
      <div style={{ padding: '20px', background: '#f9f9f9', borderBottom: '2px solid #0070f3' }}>
        <h1 style={{ color: '#333' }}>{data.company?.name || slug}</h1>
        <p><b>Địa chỉ:</b> {data.company?.detailed_address || 'Đang cập nhật'}</p>
        <div style={{ whiteSpace: 'pre-line', marginTop: '15px', color: '#666' }}>
          {data.company?.description}
        </div>
      </div>

      {/* Nhúng giao diện Careernet bên dưới */}
      <iframe 
        src={`https://careernet.asia/cong-ty/${slug}`} 
        style={{ width: '100%', height: '100vh', border: 'none' }}
      />
    </main>
  );
}
