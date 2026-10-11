// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config

// Allow the local server to be reached through a Cloudflare quick tunnel
// (https://<random>.trycloudflare.com). Without this, Astro/Vite rejects
// requests whose Host header it doesn't recognise with a "Blocked request.
// This host is not allowed" page.
//
// The leading dot matches every *.trycloudflare.com subdomain, so it keeps
// working when the tunnel URL changes on restart. This is only for local
// sharing/demos — it is not real hosting; stop the tunnel when you're done.
const tunnelHosts = ['.trycloudflare.com'];

export default defineConfig({
  server: { allowedHosts: tunnelHosts }, // `astro dev`
  vite: { preview: { allowedHosts: tunnelHosts } }, // `astro preview`
});
