import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
    root: resolve(__dirname, 'src/web'),                        // 웹의 루트 디렉토리
    publicDir: resolve(__dirname, 'public-web'),                // 웹 전용 정적 파일 폴더 지정

    server: {
        port: 3000,
        open: true,
        host: true,
    },

    build: {                                                    // 빌드 결과물이 들어갈 폴더 (Extension과 구분)
        outDir: resolve(__dirname, 'dist-web'),
    },

    plugins: [react()],
})