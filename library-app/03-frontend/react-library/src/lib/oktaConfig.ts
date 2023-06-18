export const oktaConfig = {
    clientId: '0oa9x21n7tzRf5TOq5d7',
    issuer: 'https://dev-89407225.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}