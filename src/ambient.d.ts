// Squelch warnings of image imports from your assets dir
declare module '$lib/assets/*' {
    var meta
    export default meta
  }