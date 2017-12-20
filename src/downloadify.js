(function(){
  class Downloadify {
    constructor(target, props){
      this.target = target
      this.windows = props.windows
      this.macos = props.macos
      this.linux = props.linux
      this.fallback = props.fallback
      this.click = this.click.bind(this)
      this.kill = this.kill.bind(this)

      if(navigator.platform.indexOf('Windows NT') != -1) {
        const platform = 'windows'
      } else if(navigator.platform.indexOf('Macintosh') != -1) {
        const platform = 'windows'
      } else if(navigator.platform.indexOf('Linux') != -1) {
        const platform = 'linux'
      }

      this.target.addEventListener('click', this.click())
    }
    kill() {
      this.target.removeEventListener('click', this.click())
      return 'Downloadify removed'
    }
    private click() {
      switch(this.platform) {
        case 'windows':
          return window.location = this.windows
        case 'macos':
          return window.location = this.macos
        case 'linux':
          return window.location = this.linux
        default:
          if(this.callback) {
            return window.location = this.callback
          } else {
            throw new Error
          }
      }
    }
}
})(window)
