import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// __dirname이 ES Module 환경에서 기본 제공되지 않으므로 수동 정의
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
    root: resolve(__dirname, 'src/chrome-extension'),                   // 크롬 확장 프로그램의 루트 디렉토리
    publicDir: resolve(__dirname, 'public-extension'),                  // 확장 프로그램 전용 정적 파일 폴더 지정

    build: {
        outDir: resolve(__dirname, 'dist-extension'),                   // 빌드 결과물이 들어갈 폴더 (웹과 구분)

        rollupOptions: {                                                // 다중 엔트리 설정 (Popup HTML, background.js 등)
            input: {
                popup: resolve(__dirname, 'src/chrome-extension/popup.html'),
                background: resolve(__dirname, 'src/chrome-extension/background.js'),
            },

            output: {                                                   // 출력 파일명 패턴
                entryFileNames: 'assets/[name].js',
                chunkFileNames: 'assets/[name].js',
                assetFileNames: 'assets/[name].[ext]'
            }
        }
    },

    plugins: [react()],
})
