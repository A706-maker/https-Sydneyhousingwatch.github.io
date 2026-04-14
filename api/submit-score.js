import { createClient } from '@supabase/supabase-js';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SECRET_KEY) {
    return res.status(500).json({ error: 'Server configuration error: missing Supabase credentials' });
  }

  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SECRET_KEY
  );

  const { user_id, score, total_questions, answers, percentage_score } = req.body;

  if (
    typeof user_id !== 'string' ||
    typeof score !== 'number' ||
    typeof total_questions !== 'number' ||
    !Array.isArray(answers) ||
    typeof percentage_score !== 'number'
  ) {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const { data, error } = await supabase
    .from('quiz_responses')
    .insert([{ user_id, score, total_questions, answers, percentage_score }])
    .select();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json({ data });
}
