/* eslint-disable consistent-return */

const plugin = require('windicss/plugin')

const contentVisibility = plugin(({ addUtilities, addDynamic }) => {
  addUtilities(
    {
      '.content-auto': {
        'content-visibility': 'auto'
      },
      '.content-visible': {
        'content-visibility': 'visible'
      },
      '.content-hidden': {
        'content-visibility': 'hidden'
      }
    },
    {
      variants: ['responsive']
    }
  )

  addDynamic(
    'intrinsic-size',
    ({ Utility }) =>
      Utility.handler
        .handleNumber(1, undefined, 'int', (number) => `${number}px`)
        .createProperty(['contain-intrinsic-size'], (value) => {
          if (value !== 'none') {
            return value
          }
        }),
    {
      variants: ['responsive']
    }
  )
})

module.exports = contentVisibility
