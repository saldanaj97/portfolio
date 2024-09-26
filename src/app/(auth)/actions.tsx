'use server';

import { cookies } from 'next/headers';
import { createClient } from '~/utils/supabase/server';

export const supabase = createClient(cookies());
