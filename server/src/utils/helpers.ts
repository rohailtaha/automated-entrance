import bcrypt from 'bcrypt';
// Function to hash a password
export async function hashPassword(plainPassword: string): Promise<string> {
  const hashedPassword = await bcrypt.hash(plainPassword, 10);
  return hashedPassword;
}
