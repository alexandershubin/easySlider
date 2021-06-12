addEventListener('DOMContentLoaded', () => {
  /**
   * инициализирует плагин
   * @param {number} activeSlide
   */
  const initSliderPlugin = (activeSlide = 0) => {
    const sliders = document.querySelectorAll('.slide');
    sliders[activeSlide].classList.add('active');

    /**
     * добавляет клик по классу active
     */
    const clickSlideHandler = () => {
      sliders.forEach(slide => {
        slide.addEventListener('click', () => {
          removeClassActive();
          slide.classList.add('active')
        })
      })
    }

    /**
     * удаляет клик по классу active
     */
    const removeClassActive = () => {
      sliders.forEach(slide => {
        slide.classList.remove('active')
      })
    }
    clickSlideHandler()
  }

  initSliderPlugin()
})

