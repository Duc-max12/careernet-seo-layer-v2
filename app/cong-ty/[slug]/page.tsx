export default async function Page({ params }: any) {
  const { slug } = await params;
  
  const res = await fetch(`https://cxyvrjgwrbftlzzuewuu.supabase.co/functions/v1/company-seo-page?slug=${slug}`, { cache: 'no-store' });
  const data = await res.json();

  return (
    <main>
      <div style={{ padding: '20px', background: '#f5f5f5' }}>
        <h1>{data.company?.name || slug}</h1>
        <p>{data.company?.description}</p>
      </div>
      <iframe 
        src={`https://careernet.asia/cong-ty/${slug}`} 
        style={{ width: '100%', height: '1000px', border: 'none' }}
      />
    </main>
  );
}
