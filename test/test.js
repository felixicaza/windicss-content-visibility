import { Processor } from 'windicss/lib'
import contentVisibility from '../src/index'

describe('Content Visibility Plugin', () => {
  it('should generate content-visibility properties correctly', () => {
    const processor = new Processor({
      plugins: [contentVisibility]
    })

    const css = `
      content-auto
      content-visible
      content-hidden
    `
    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot('content-visibility')
  })

  it('generate contain-intrinsic-size correctly', () => {
    const processor = new Processor({
      plugins: [contentVisibility]
    })

    const css = `
      intrinsic-size-200
      intrinsic-size-350
      intrinsic-size-525
      intrinsic-size-1200
      intrinsic-size-9999
    `
    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot('contain-intrinsic-size')
  })

  it('check responsive variants', () => {
    const processor = new Processor({
      plugins: [contentVisibility]
    })

    const css = `
      sm:content-auto
      md:content-visible
      lg:content-hidden
      xl:content-auto
      sm:intrinsic-size-200
      md:intrinsic-size-350
      lg:intrinsic-size-525
      xl:intrinsic-size-700
    `
    const result = processor.interpret(css)

    expect(result.ignored.length).toEqual(0)
    expect(result.styleSheet.build()).toMatchSnapshot('responsive variants')
  })
})
