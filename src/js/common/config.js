export default {
  api: process.env.NODE_ENV === 'production'
    ? 'https://ls.diandianyuyue.com'
    : '/api/',
  reg: {
    phone: /^1[345678]{1}\d{9}$/
  }
}
