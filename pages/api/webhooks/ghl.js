export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, phone, agency, tags } = req.body;

  try {
    console.log(`GHL Webhook received: ${email} from ${agency}`);
    
    // Here we would call the GHL API or Supabase to sync the lead
    // Example: await supabase.from('leads').upsert({ email, name, phone, agency, tags });
    
    return res.status(200).json({ 
      success: true, 
      message: 'Lead synced with Maná Academy CRM' 
    });
  } catch (error) {
    console.error('Webhook Error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
