const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.customer_details.email;

    // 1. Crear cuenta de estudiante automáticamente
    const { data, error } = await supabase.auth.admin.createUser({
      email: customerEmail,
      password: 'ChangeMe123!', // El usuario la cambia al entrar
      email_confirm: true
    });

    // 2. Enviar email de bienvenida (vía Resend o SendGrid)
    console.log(`Venta exitosa de $49: Acceso creado para ${customerEmail}`);
  }

  res.json({ received: true });
}
