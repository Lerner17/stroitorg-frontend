export default function({ $axios, env }) {
  $axios.setBaseURL(env.API_URL)
}
