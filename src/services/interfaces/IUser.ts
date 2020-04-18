/**
 * User interface
 * @property {full_name} string,
 * @property {phone} number,
 * @property {email} string,
 * @property {password} string,
 * @property {adhaar_id} number,
 */
export interface IUser {
    full_name: string;
    phone: number;
    email: string;
    password: string;
    adhaar_id: number;
    created_at: Date;
}