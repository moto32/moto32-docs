export default defineNuxtPlugin({
  name: 'umami-analytics',
  setup() {
    // Check if script already exists
    if (document.querySelector('script[data-website-id="7fa05be7-2d37-4c40-ae0b-8ca27bfc156e"]')) {
      return
    }
    
    // Create script element exactly as provided
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://cloud.umami.is/script.js'
    script.setAttribute('data-website-id', '7fa05be7-2d37-4c40-ae0b-8ca27bfc156e')
    
    // Add to head
    document.head.appendChild(script)
  }
})

