(function(){
	class Downloadify {
		constructor(target, navigator, urls){
			this.target = target
			this.navigator = navigator
			this.windows = urls.windows
			this.macos = urls.macos
			this.linux = urls.linux
			this.fallback = urls.fallback

			this.click = this.click.bind(this)
			this.kill = this.kill.bind(this)

			if(this.navigator.platform.indexOf('Win') != -1) {
				this.platform = 'windows'
			} else if(this.navigator.platform.indexOf('Mac') != -1) {
				this.platform = 'macos'
			} else if(this.navigator.platform.indexOf('Linux') != -1) {
				this.platform = 'linux'
			}

			this.target.addEventListener('click', () => {
				this.click()
			})
		}
		kill() {
			this.target.removeEventListener('click', this.click())
			return 'Downloadify removed'
		}
		click() {
			switch(this.platform) {
			case 'windows':
				return window.location = this.windows
			case 'macos':
				return window.location = this.macos
			case 'linux':
				return window.location = this.linux
			default:
				if(this.fallback) {
					return window.location = this.fallback
				} else {
					throw new Error
				}
			}
		}
	}

	window.Downloadify = Downloadify
})()
