// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  urls: {
    domain_redirect_uri: 'http://localhost:4200/home',
    domain_url: 'http://localhost:4200',
    // baseUrl: 'http://192.168.4.57:8000',
    baseUrl: 'http://127.0.0.1:8000/',
    authUrl: 'http://localhost:4200/user-auth'
  },
};
