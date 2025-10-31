import { createClient } from "@supabase/supabase-js";

export default async function handler(req, res) {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY // use Access Key here
  );

  const { data, error } = await supabase.storage
    .from("resume") // your bucket
    .createSignedUrl("Harshal_Patil_Resume_v2.pdf", 60); // valid for 60s

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  res.status(200).json({ url: data.signedUrl });
}
