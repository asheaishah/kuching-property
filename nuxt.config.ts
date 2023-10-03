// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'LD Legenda, a RM300 million mixed commercial and SOHO development, was completed in 2018 by Lien Dak Group of Companies in Kuching, Sarawak, Malaysia. Positioned alongside Jalan Tun Abang Haji Openg and adjacent to Sarawak General Hospital (SGH), the largest general hospital in Sarawak, LD Legenda offers easy access via a 24/7 covered walkway that connects to SGH within a brief 3-minute stroll through the LG level foodcourt. The single 10-story structure encompasses 9 levels of service apartments and SOHO Hotel units, 1.5 levels of retail space, 3.5 basement carpark levels, a gym, shower facilities, and a rooftop swimming pool with a panoramic city view. Designed as a green building, it features sustainable elements like rainwater harvesting, a green wall, and solar-powered lighting. The 1,300 studio units accommodate a diverse community, including healthcare professionals from SGH, nearby office workers, students from Swinburne University, and medical tourists seeking proximity to the hospital.' },
                { hid: 'keywords', name: 'keywords', content: 'Kuching Property, kuching, property,kuching property new launch, launch, new, latest Kuching Property' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            script: [
                {
                  src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
                  integrity: 'sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=',
                  crossorigin: 'anonymous',
                },
              ],
        }
    },
    runtimeConfig: {
        email: '', // can be overridden by NUXT_API_SECRET environment variable
        title: 'Kuching Property',
        emailUser: ''
    },
    modules: [
        'nuxt-gtag',
    ],

    gtag: {
        id: 'G-1ZZPT5GYSK'
    }
})
