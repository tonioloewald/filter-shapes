# filter shapes

[github](https://github.com/tonioloewald/filter-shapes) | [npm](https://www.npmjs.com/package/filter-shapes)

**filter-shapes** `filter` function lets you filter an object using an example of that "shape" (these
examples are `type` values, see [type-by-example](https://github.com/tonioloewald/type-by-example)). 
The way `type-by-example` type values work is that an example of what you want will usually do the trick.

## Filtering Simple Values

Simple values will be filtered using examples in an obvious way, and more specifically
using the **Specific Type** strings implemented in the [type](./type-by-example) system.

    filter(1, -1)                       // -1
    filter("1", -1)                     // undefined
    filter('#int', -1)                  // -1
    filter('#int [0,∞)', -1)            // undefined
    filter('#int [0,∞)', 17)            // 17
    filter('#regex ^\\d{5}$', '1234')   // undefined
    filter('#regex ^\\d{5}$', '90210')  // '90210'

## Filtering Objects

You can filter objects down to just the desired "shape".

If the provided object simply doesn't match the type of the filter then nothing 
will pass through.

    const orig = {
      foo: 'bar',
      baz: 17
    }
    filter({ foo: 'whatever' }, orig)    // { foo: 'bar' }
    filter({ baz: 100 }, orig)           // { baz: 17 }
    filter({ foo: 100 }, orig)           // undefined

    filter({x: 0, y: 0}, {x: 100, y: 120, z: 17}) // returns {x: 100, y: 120}
    filter({x: 0, y: 0, z: 0}, {x: 100, y: 120})  // returns undefined

## Filtering Arrays

Filter will filter arrays based on the elements in the
corresponding type's array, e.g.

    const orig = [true, false, 'hello', 17]

    filter([true], orig) // returns [true, false]
    filter([0], orig) // returns [17]
    filter(['test', false], orig) // returns [true, false, 'hello']
    filter([], orig) // returns [...orig]

## History

This library originally started out as part of [xinjs](https://xinjs.net) and is now being broken out as a standalone library.

## Development

Aside from the usual [nodejs](https://node.js) toolchain, this project uses [bun](https://bun.sh) for speed and as a test runner.
