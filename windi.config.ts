import { defineConfig } from 'windicss/helpers'
import formsPlugin from 'windicss/plugin/forms'

export default defineConfig({
    darkMode: 'class',
    //   safelist: 'p-3 p-4 p-5',
    theme: {
        extend: {
            colors: {
                ll: {
                    100: '#191B28',
                    200: '#242839',
                    primary: '#1E93FF',
                }
                // teal: {
                //   100: '#096',
                // },
            },
        },
    },
    plugins: [formsPlugin],
})