// vite.config.js
import { defineConfig } from "file:///C:/Users/Notebook/Desktop/finitoo%20-%20Kopya/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Notebook/Desktop/finitoo%20-%20Kopya/node_modules/@vitejs/plugin-react/dist/index.mjs";
var cssFileName = "index.min.css";
var vite_config_default = defineConfig({
  plugins: [react()],
  publicDir: "/public",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (file) => {
          return `assets/css/${cssFileName}`;
        },
        entryFileName: (file) => {
          return `assets/js/[name].min.js`;
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxOb3RlYm9va1xcXFxEZXNrdG9wXFxcXGZpbml0b28gLSBLb3B5YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcTm90ZWJvb2tcXFxcRGVza3RvcFxcXFxmaW5pdG9vIC0gS29weWFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL05vdGVib29rL0Rlc2t0b3AvZmluaXRvbyUyMC0lMjBLb3B5YS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5jb25zdCBjc3NGaWxlTmFtZSA9IFwiaW5kZXgubWluLmNzc1wiO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICBwdWJsaWNEaXI6IFwiL3B1YmxpY1wiLFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGZpbGUpID0+IHtcbiAgICAgICAgICByZXR1cm4gYGFzc2V0cy9jc3MvJHtjc3NGaWxlTmFtZX1gO1xuICAgICAgICB9LFxuICAgICAgICBlbnRyeUZpbGVOYW1lOiAoZmlsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiBgYXNzZXRzL2pzL1tuYW1lXS5taW4uanNgO1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJULFNBQVMsb0JBQW9CO0FBQ3hWLE9BQU8sV0FBVztBQUNsQixJQUFNLGNBQWM7QUFHcEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFdBQVc7QUFBQSxFQUNYLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxRQUNOLGdCQUFnQixDQUFDLFNBQVM7QUFDeEIsaUJBQU8sY0FBYyxXQUFXO0FBQUEsUUFDbEM7QUFBQSxRQUNBLGVBQWUsQ0FBQyxTQUFTO0FBQ3ZCLGlCQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
