const MANIFEST_URL = 'manifest.json'
const localHost = ['127.0.0.1', 'localhost']

async function main() {
    const isLocal = !!~localHost.indexOf(window.location.hostname)
    console.log('isLocal?', isLocal)
    const manifestJSON = await (await fetch(MANIFEST_URL)).json()
    const host = isLocal ? manifestJSON.localHost : manifestJSON.productioHost
    const videoComponent = new VideoComponent()
    
    
    const videoPlayer = new VideoMediaPlayer({
        manifestJSON
    })
    
    videoPlayer.initializeCodec()
    videoComponent.initializePlayer()
}

window.onload = main