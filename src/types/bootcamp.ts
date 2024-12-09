export interface BootcampSignup {
  id?: string;
  full_name: string;
  email: string;
  phone: string;
  experience_level: 'beginner' | 'intermediate' | 'advanced';
  created_at?: string;
}