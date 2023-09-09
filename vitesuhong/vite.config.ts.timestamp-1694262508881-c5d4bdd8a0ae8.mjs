// vite.config.ts
import { defineConfig } from "file:///srv/app/node_modules/vitest/dist/config.js"
import react from "file:///srv/app/node_modules/@vitejs/plugin-react/dist/index.mjs"
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    open: true,
    host: true,
    port: 8080,
    // This is the port which we will use in docker
    // add the next lines if you're using windows and hot reload doesn't work
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: "build",
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc3J2L2FwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nydi9hcHAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL3Nydi9hcHAvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZXN0L2NvbmZpZ1wiXG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCJcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtyZWFjdCgpXSxcbiAgc2VydmVyOiB7XG4gICAgb3BlbjogdHJ1ZSxcbiAgICBob3N0OiB0cnVlLFxuICAgIHBvcnQ6IDgwODAsIC8vIFRoaXMgaXMgdGhlIHBvcnQgd2hpY2ggd2Ugd2lsbCB1c2UgaW4gZG9ja2VyXG4gICAgLy8gYWRkIHRoZSBuZXh0IGxpbmVzIGlmIHlvdSdyZSB1c2luZyB3aW5kb3dzIGFuZCBob3QgcmVsb2FkIGRvZXNuJ3Qgd29ya1xuICAgIHdhdGNoOiB7XG4gICAgICB1c2VQb2xsaW5nOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBcImJ1aWxkXCIsXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogXCJqc2RvbVwiLFxuICAgIHNldHVwRmlsZXM6IFwic3JjL3NldHVwVGVzdHNcIixcbiAgICBtb2NrUmVzZXQ6IHRydWUsXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwTSxTQUFTLG9CQUFvQjtBQUN2TyxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBO0FBQUEsSUFFTixPQUFPO0FBQUEsTUFDTCxZQUFZO0FBQUEsSUFDZDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxFQUNiO0FBQUEsRUFDQSxNQUFNO0FBQUEsSUFDSixTQUFTO0FBQUEsSUFDVCxhQUFhO0FBQUEsSUFDYixZQUFZO0FBQUEsSUFDWixXQUFXO0FBQUEsRUFDYjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
