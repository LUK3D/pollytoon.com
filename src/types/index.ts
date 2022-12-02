
export interface IUser {
    iss?: string;
    nbf?: number;
    aud?: string;
    sub?: string;
    email?: string;
    email_verified?: boolean;
    azp?: string;
    name?: string;
    username?: string;
    bio?: string;
    tagline?: string;
    picture?: string;
    given_name?: string;
    family_name?: string;
    iat?: number;
    exp?: number;
    jti?: string;
}