// doc: https://vitepress.dev/guide/data-loading#basic-usage
export default {
    load() {
      return {
        now: new Date().toUTCString()
      }
    }
  }