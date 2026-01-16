export default async function Page({ params }: any) {
  const { slug } = await params;
  
  // Gọi API lấy dữ liệu thực tế của GMO từ Supabase
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`);
  const data = await res.json();

  return (
    <main>
      {/* 1. Phần Text cho Google Bot đọc - Lấy từ dữ liệu thực tế anh đã kiểm tra */}
      <div style={{ padding: '20px', background: '#f5f5f5' }}>
        <h1>{data.company?.name || slug}</h1>
        <p><b>Ngành nghề:</b> {data.company?.industry}</p>
        <div style={{ whiteSpace: 'pre-line', marginTop: '10px' }}>
          {data.company?.description}
        </div>
      </div>

      {/* 2. Nhúng giao diện Careernet chính thức cho người dùng */}
      <iframe 
        src={`https://careernet.asia/cong-ty/${slug}`} 
        style={{ width: '100%', height: '1000px', border: 'none' }}
      />
    </main>
  );
}
