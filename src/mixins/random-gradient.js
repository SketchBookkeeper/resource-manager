import {randomColor} from 'randomcolor'

export default {
  methods: {
    getRandomGradient (colorOptions1, colorOptions2) {
      const color1 = randomColor(
        colorOptions1 || {}
      )
      const color2 = randomColor(
        colorOptions2 || {}
      )

      return `background: linear-gradient(45deg, ${color1} 0%, ${color1} 55%, ${color2} 100%)`
    }
  }
}
